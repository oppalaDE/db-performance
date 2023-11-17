'use strict';
const {aql, db} = require('@arangodb');
const createRouter = require('@arangodb/foxx/router');
const router = createRouter();

module.context.use(router);

router.post('/cache/normal', function (req, res) {
  const {birth_city_id, living_city_id} = req.body;

  const result = db._query(
    `
      FOR person IN person
      FILTER person.birth_city_id == @birth_city_id
      FILTER person.living_city_id == @living_city_id
      RETURN {first_name: person.first_name, last_name: person.last_name, birth_city_id: person.birth_city_id, living_city_id: person.living_city_id}
    `,
    {birth_city_id, living_city_id}
  );

  res.send(result);
})
.body(['application/json'], 'Birth city and living city id')
.response(['application/json'], 'User list')
.summary('List of users')
.description('Returns all users with defined cities');

router.post('/cache/normal-slow', function (req, res) {
  // const {first_name, last_name} = req.body;

  const result = db._query(
    `
      FOR person IN person
      FILTER person.first_name == @first_name
      FILTER person.last_name == @last_name
      RETURN {first_name: person.first_name, last_name: person.last_name}
    `,
    {first_name: 'Luna', last_name: 'Ray'}
  );

  res.send(result);
})
.body(['application/json'], 'First and last name')
.response(['application/json'], 'User list')
.summary('List of users')
.description('Returns all users with defined names');