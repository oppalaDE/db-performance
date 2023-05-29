const Benchmark = require('benchmark');
const { aql } = require('arangojs');
const { prisma, prismaMongo, mongoose, Person, arangodb } = require('../db/db');

// Projection
exports.testProjection = async function() {
  const res = {results: {}};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-projection', async (deferred) => {
        const result = await prisma.$queryRaw`
          select first_name, last_name
          from person;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-projection', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').find({}, {projection: {first_name: true, last_name: true}}).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-projection', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          RETURN {first_name: person.first_name, last_name: person.last_name}
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['projection-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').find().toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          RETURN person
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-projection-real', async (deferred) => {
        const result = await prisma.$queryRaw`
          select person.id, person.first_name, person.last_name
          from person
          where person.first_name = 'Luna' and person.last_name = 'Ray';
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-projection-real', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').find({first_name: 'Luna', last_name: 'Ray'}, {projection: {_id: true, first_name: true, last_name: true}}).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-projection-real', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          FILTER person.first_name == 'Luna'
          FILTER person.last_name == 'Ray'
          RETURN {first_name: person.first_name, last_name: person.last_name}
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['projection-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-real', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.first_name = 'Luna' and person.last_name = 'Ray';
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-real', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').find({first_name: 'Luna', last_name: 'Ray'}).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-real', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          FILTER person.first_name == 'Luna'
          FILTER person.last_name == 'Ray'
          RETURN person
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-projection-real-index', async (deferred) => {
        const result = await prisma.$queryRaw`
          select person.id, person.first_name, person.last_name
          from person
          where person.birth_city_id = 27 and person.living_city_id = 1;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-projection-real-index', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').find({birth_city_id: 27, living_city_id: 1}, {projection: {_id: true, first_name: true, last_name: true}}).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-projection-real-index', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          FILTER person.birth_city_id == '27'
          FILTER person.living_city_id == '1'
          RETURN {first_name: person.first_name, last_name: person.last_name}
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['projection-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-real-index', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.birth_city_id = 27 and person.living_city_id = 1;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-real-index', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').find({birth_city_id: 27, living_city_id: 1}).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-real-index', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          FILTER person.birth_city_id == '27'
          FILTER person.living_city_id == '1'
          RETURN person
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  return res;
}

// Calculate age of persons whos name starts with J
exports.testCalculationDateDiff = async function() {
  const res = {};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-timestampdiff', async (deferred) => {
        const result = await prisma.$queryRaw`
          select id, first_name, last_name, birthdate, TIMESTAMPDIFF(YEAR, person.birthdate, CURDATE()) AS age
          from person
          where first_name like 'A%';
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-datediff', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').aggregate(
          [
            {
              $match: {
                first_name: {
                  $regex: /^A.*/
                }
              }
            },
            {
              $project: {
                _id: true,
                first_name: true,
                last_name: true,
                birthdate: true
              }
            },
            {
              $addFields: {
                age: {
                  $dateDiff: {
                    startDate: '$birthdate',
                    endDate: '$$NOW',
                    unit: 'year'
                  }
                }
              }
            }
          ]
        ).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-datediff', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          FILTER STARTS_WITH(person.first_name, 'A')
          RETURN {
            _key: person._key,
            first_name: person.first_name,
            last_name: person.last_name,
            birthdate: person.birthdate,
            age: DATE_DIFF(person.birthdate, DATE_NOW(), 'year')
          }
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['db-datediff-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  const calculateAge = (date) => {
    const ageDifMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  const input = await prisma.$queryRaw`
    select *
    from person
    where person.first_name like 'A%';
  `;
  new Benchmark.Suite()
    .add('js-map-calculate', () => {
      input.map((person) => {
        person.age = calculateAge(new Date(person.birthdate));
        return person;
      });
    })
    .add('js-foreach-calculate', () => {
      input.forEach((person) => {
        person.age = calculateAge(new Date(person.birthdate));
      });
    })
    .add('js-for-calculate', () => {
      for(const person of input)
        person.age = calculateAge(new Date(person.birthdate));
    })
    .on('cycle', (event) => {
      console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
      res[event.target.name] = {
        target: String(event.target),
        sample: event.target.stats.sample,
        mean: event.target.stats.mean
      };
    })
    .on('complete', function() {
      res['js-datediff-fastest'] = this.filter('fastest').map('name');
    })
    .run();

    await new Promise((resolve) =>
      new Benchmark.Suite()
        .add('mysql-js-map-calculate', async (deferred) => {
          const persons = await prisma.$queryRaw`
            select id, first_name, last_name, birthdate
            from person
            where person.first_name like 'A%';
          `;
          const result = persons.map((person) => {
            person.age = calculateAge(new Date(person.birthdate));
            return person;
          });
          deferred.resolve();
        }, {defer: true})
        .add('mysql-js-foreach-calculate', async (deferred) => {
          const persons = await prisma.$queryRaw`
            select id, first_name, last_name, birthdate
            from person
            where person.first_name like 'A%';
          `;
          persons.forEach((person) => {
            person.age = calculateAge(new Date(person.birthdate));
          });
          deferred.resolve();
        }, {defer: true})
        .add('mysql-js-for-calculate', async (deferred) => {
          const persons = await prisma.$queryRaw`
            select id, first_name, last_name, birthdate
            from person
            where person.first_name like 'A%';
          `;
          for(const person of persons)
            person.age = calculateAge(new Date(person.birthdate));
          deferred.resolve();
        }, {defer: true})
        .add('mongo-js-map-calculate', async (deferred) => {
          const persons = await mongoose.connection.db.collection('person').aggregate([{$match: {first_name: {$regex: /^A.*/}}}, {$project: {_id: true, first_name: true, last_name: true, birthdate: true}}]).toArray();
          const result = persons.map((person) => {
            person.age = calculateAge(new Date(person.birthdate));
            return person;
          });
          deferred.resolve();
        }, {defer: true})
        .add('mongo-js-foreach-calculate', async (deferred) => {
        const persons = await mongoose.connection.db.collection('person').aggregate([{$match: {first_name: {$regex: /^A.*/}}}, {$project: {_id: true, first_name: true, last_name: true, birthdate: true}}]).toArray();
          persons.forEach((person) => {
            person.age = calculateAge(new Date(person.birthdate));
          });
          deferred.resolve();
        }, {defer: true})
        .add('mongo-js-for-calculate', async (deferred) => {
        const persons = await mongoose.connection.db.collection('person').aggregate([{$match: {first_name: {$regex: /^A.*/}}}, {$project: {_id: true, first_name: true, last_name: true, birthdate: true}}]).toArray();
          for(const person of persons)
            person.age = calculateAge(new Date(person.birthdate));
          deferred.resolve();
        }, {defer: true})
        .add('arango-js-map-calculate', async (deferred) => {
          const persons = await (await arangodb.query(aql`
            FOR person IN person
            FILTER STARTS_WITH(person.first_name, 'A')
            RETURN {
              _key: person._key,
              first_name: person.first_name,
              last_name: person.last_name,
              birthdate: person.birthdate
            }
          `)).all();
          const result = persons.map((person) => {
            person.age = calculateAge(new Date(person.birthdate));
            return person;
          });
          deferred.resolve();
        }, {defer: true})
        .add('arango-js-foreach-calculate', async (deferred) => {
          const persons = await (await arangodb.query(aql`
            FOR person IN person
            FILTER STARTS_WITH(person.first_name, 'A')
            RETURN {
              _key: person._key,
              first_name: person.first_name,
              last_name: person.last_name,
              birthdate: person.birthdate
            }
          `)).all();
          persons.forEach((person) => {
            person.age = calculateAge(new Date(person.birthdate));
          });
          deferred.resolve();
        }, {defer: true})
        .add('arango-js-for-calculate', async (deferred) => {
          const persons = await (await arangodb.query(aql`
            FOR person IN person
            FILTER STARTS_WITH(person.first_name, 'A')
            RETURN {
              _key: person._key,
              first_name: person.first_name,
              last_name: person.last_name,
              birthdate: person.birthdate
            }
          `)).all();
          for(const person of persons)
            person.age = calculateAge(new Date(person.birthdate));
          deferred.resolve();
        }, {defer: true})
        .on('cycle', (event) => {
          console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
          res[event.target.name] = {
            target: String(event.target),
            sample: event.target.stats.sample,
            mean: event.target.stats.mean
          };
        })
        .on('complete', function() {
          res['db-js-datediff-fastest'] = this.filter('fastest').map('name');
          resolve();
        })
        .run({async: false, defer: true})
    );

    await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-index-timestampdiff', async (deferred) => {
        const result = await prisma.$queryRaw`
          select id, first_name, last_name, birthdate, TIMESTAMPDIFF(YEAR, person.birthdate, CURDATE()) AS age
          from person
          where person.birth_city_id = 27 and person.living_city_id = 1;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-index-datediff', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').aggregate(
          [
            {
              $match: {
                birth_city_id: 27,
                living_city_id: 1
              }
            },
            {
              $project: {
                _id: true,
                first_name: true,
                last_name: true,
                birthdate: true
              }
            },
            {
              $addFields: {
                age: {
                  $dateDiff: {
                    startDate: '$birthdate',
                    endDate: '$$NOW',
                    unit: 'year'
                  }
                }
              }
            }
          ]
        ).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-index-datediff', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
          FILTER person.birth_city_id == '27'
          FILTER person.living_city_id == '1'
          RETURN {
            _key: person._key,
            first_name: person.first_name,
            last_name: person.last_name,
            birthdate: person.birthdate,
            age: DATE_DIFF(person.birthdate, DATE_NOW(), 'year')
          }
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['db-index-datediff-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

    await new Promise((resolve) =>
      new Benchmark.Suite()
        .add('mysql-index-js-map-calculate', async (deferred) => {
          const persons = await prisma.$queryRaw`
            select id, first_name, last_name, birthdate
            from person
            where person.birth_city_id = 27 and person.living_city_id = 1;
          `;
          const result = persons.map((person) => {
            person.age = calculateAge(new Date(person.birthdate));
            return person;
          });
          deferred.resolve();
        }, {defer: true})
        .add('mysql-index-js-foreach-calculate', async (deferred) => {
          const persons = await prisma.$queryRaw`
            select id, first_name, last_name, birthdate
            from person
            where person.birth_city_id = 27 and person.living_city_id = 1;
          `;
          persons.forEach((person) => {
            person.age = calculateAge(new Date(person.birthdate));
          });
          deferred.resolve();
        }, {defer: true})
        .add('mysql-index-js-for-calculate', async (deferred) => {
          const persons = await prisma.$queryRaw`
            select id, first_name, last_name, birthdate
            from person
            where person.birth_city_id = 27 and person.living_city_id = 1;
          `;
          for(const person of persons)
            person.age = calculateAge(new Date(person.birthdate));
          deferred.resolve();
        }, {defer: true})
        .add('mongo-index-js-map-calculate', async (deferred) => {
          const persons = await mongoose.connection.db.collection('person').aggregate([{$match: {birth_city_id: 27, living_city_id: 1}}, {$project: {_id: true, first_name: true, last_name: true, birthdate: true}}]).toArray();
          const result = persons.map((person) => {
            person.age = calculateAge(new Date(person.birthdate));
            return person;
          });
          deferred.resolve();
        }, {defer: true})
        .add('mongo-index-js-foreach-calculate', async (deferred) => {
        const persons = await mongoose.connection.db.collection('person').aggregate([{$match: {birth_city_id: 27, living_city_id: 1}}, {$project: {_id: true, first_name: true, last_name: true, birthdate: true}}]).toArray();
          persons.forEach((person) => {
            person.age = calculateAge(new Date(person.birthdate));
          });
          deferred.resolve();
        }, {defer: true})
        .add('mongo-index-js-for-calculate', async (deferred) => {
        const persons = await mongoose.connection.db.collection('person').aggregate([{$match: {birth_city_id: 27, living_city_id: 1}}, {$project: {_id: true, first_name: true, last_name: true, birthdate: true}}]).toArray();
          for(const person of persons)
            person.age = calculateAge(new Date(person.birthdate));
          deferred.resolve();
        }, {defer: true})
        .add('arango-index-js-map-calculate', async (deferred) => {
          const persons = await (await arangodb.query(aql`
            FOR person IN person
            FILTER person.birth_city_id == '27'
            FILTER person.living_city_id == '1'
            RETURN {
              _key: person._key,
              first_name: person.first_name,
              last_name: person.last_name,
              birthdate: person.birthdate
            }
          `)).all();
          const result = persons.map((person) => {
            person.age = calculateAge(new Date(person.birthdate));
            return person;
          });
          deferred.resolve();
        }, {defer: true})
        .add('arango-index-js-foreach-calculate', async (deferred) => {
          const persons = await (await arangodb.query(aql`
            FOR person IN person
            FILTER person.birth_city_id == '27'
            FILTER person.living_city_id == '1'
            RETURN {
              _key: person._key,
              first_name: person.first_name,
              last_name: person.last_name,
              birthdate: person.birthdate
            }
          `)).all();
          persons.forEach((person) => {
            person.age = calculateAge(new Date(person.birthdate));
          });
          deferred.resolve();
        }, {defer: true})
        .add('arango-index-js-for-calculate', async (deferred) => {
          const persons = await (await arangodb.query(aql`
            FOR person IN person
            FILTER person.birth_city_id == '27'
            FILTER person.living_city_id == '1'
            RETURN {
              _key: person._key,
              first_name: person.first_name,
              last_name: person.last_name,
              birthdate: person.birthdate
            }
          `)).all();
          for(const person of persons)
            person.age = calculateAge(new Date(person.birthdate));
          deferred.resolve();
        }, {defer: true})
        .on('cycle', (event) => {
          console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
          res[event.target.name] = {
            target: String(event.target),
            sample: event.target.stats.sample,
            mean: event.target.stats.mean
          };
        })
        .on('complete', function() {
          res['db-index-js-datediff-fastest'] = this.filter('fastest').map('name');
          resolve();
        })
        .run({async: false, defer: true})
    );

  return res;
}

// Sort persons by birthdate
exports.testSortNonIndex = async function(input) {
  const res = {};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-order-asc', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.first_name like 'A%'
          order by person.birthdate asc;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mysql-order-desc', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.first_name like 'A%'
          order by person.birthdate desc;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-sort-asc', async (deferred) => {
        const result = await mongoose.connection.db.collection('person')
          .find({first_name: {$regex: /^A.*/}})
          .sort({birthdate: 'asc'})
          .toArray();
        deferred.resolve();
      }, {defer: true})
      .add('mongo-sort-desc', async (deferred) => {
        const result = await mongoose.connection.db.collection('person')
          .find({first_name: {$regex: /^A.*/}})
          .sort({birthdate: 'desc'})
          .toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-sort-asc', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
            FILTER STARTS_WITH(person.first_name, 'A')
            SORT person.birthdate ASC
            RETURN person
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('arango-sort-desc', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
            FILTER STARTS_WITH(person.first_name, 'A')
            SORT person.birthdate DESC
            RETURN person
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['sort-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  new Benchmark.Suite()
    .add('js-sort-asc', () => {
      const inputCopy = JSON.parse(JSON.stringify(input));
      inputCopy.sort((personA, personB) => new Date(personB.birthdate).getTime() - new Date(personA.birthdate).getTime());
    })
    .add('js-sort-desc', () => {
      const inputCopy = JSON.parse(JSON.stringify(input));
      inputCopy.sort((personA, personB) => new Date(personA.birthdate).getTime() - new Date(personB.birthdate).getTime());
    })
    .add('js-map-sort-asc', () => {
      mappedInput = JSON.parse(JSON.stringify(input)).map((person) => {
        person.birthdate = new Date(person.birthdate).getTime();
        return person;
      });
      mappedInput.sort((personA, personB) => personB.birthdate - personA.birthdate);
    })
    .add('js-map-sort-desc', () => {
      mappedInput = JSON.parse(JSON.stringify(input)).map((person) => {
        person.birthdate = new Date(person.birthdate).getTime();
        return person;
      });
      mappedInput.sort((personA, personB) => personA.birthdate - personB.birthdate);
    })
    .on('cycle', (event) => {
      console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
      res[event.target.name] = {
        target: String(event.target),
        sample: event.target.stats.sample,
        mean: event.target.stats.mean
      };
    })
    .on('complete', function() {
      res['js-fastest'] = this.filter('fastest').map('name');
    })
    .run();

  return res;
}

// Sort persons by id (index)
exports.testSortIndex = async function(input) {
  const res = {};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-order-asc', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.first_name like 'A%'
          order by person.id asc;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mysql-order-desc', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.first_name like 'A%'
          order by person.id desc;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-sort-asc', async (deferred) => {
        const result = await mongoose.connection.db.collection('person')
          .find({first_name: {$regex: /^A.*/}})
          .sort({_id: 'asc'})
          .toArray();
        deferred.resolve();
      }, {defer: true})
      .add('mongo-sort-desc', async (deferred) => {
        const result = await mongoose.connection.db.collection('person')
          .find({first_name: {$regex: /^A.*/}})
          .sort({_id: 'desc'})
          .toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-sort-asc', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
            FILTER STARTS_WITH(person.first_name, 'A')
            SORT person._key ASC
            RETURN person
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('arango-sort-desc', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
            FILTER STARTS_WITH(person.first_name, 'A')
            SORT person._key DESC
            RETURN person
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['sort-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  new Benchmark.Suite()
    .add('js-sort-asc', () => {
      const inputCopy = JSON.parse(JSON.stringify(input));
      inputCopy.sort((personA, personB) => personB.id - personA.id);
    })
    .add('js-sort-desc', () => {
      const inputCopy = JSON.parse(JSON.stringify(input));
      inputCopy.sort((personA, personB) => personA.id - personB.id);
    })
    .on('cycle', (event) => {
      console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
      res[event.target.name] = {
        target: String(event.target),
        sample: event.target.stats.sample,
        mean: event.target.stats.mean
      };
    })
    .on('complete', function() {
      res['js-fastest'] = this.filter('fastest').map('name');
    })
    .run();

  return res;
}

// Join Group
exports.testJoinGroupCount = async function() {
  const res = {};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-join-group', async (deferred) => {
        const result = await prisma.$queryRaw`
          select city.id, city.zip, city.city_name, city.country_name, count(person.id) as living_person_count
          from city
          left join person on (person.living_city_id = city.id)
          group by city.id;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mysql-subselect', async (deferred) => {
        const result = await prisma.$queryRaw`
          select
            city.id,
            city.zip,
            city.city_name,
            city.country_name,
            (select count(*) from person where living_city_id = city.id) as living_person_count
          from city;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-lookup-size', async (deferred) => {
        const result = await mongoose.connection.db.collection('city')
          .aggregate([
            {
              $lookup: {
                from: 'person',
                localField: '_id',
                foreignField: 'living_city_id',
                as: 'person_doc'
              }
            },
            {
              $project: {
                _id: true,
                zip: true,
                city_name: true,
                country_name: true,
                living_person_count: {
                  $size: '$person_doc'
                }
              }
            }
          ]).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('mongo-lookup-group', async (deferred) => {
        const result = await mongoose.connection.db.collection('city')
          .aggregate([
            {
              $lookup: {
                from: 'person',
                localField: '_id',
                foreignField: 'living_city_id',
                pipeline: [
                  {
                    $group: {
                      _id: '$living_city_id',
                      living_person_count: {
                          $count: {}
                      }
                    }
                  }
                ],
                as: 'person_count'
              }
            },
            {
              $unwind: {
                path: '$person_count',
                preserveNullAndEmptyArrays: true
              }
            },
            {
              $project: {
                _id: true,
                zip: true,
                city_name: true,
                country_name: true,
                living_person_count: {
                  $ifNull: ['$person_count.living_person_count', 0]
                }
              }
            }
          ]).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-join-length', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR city IN city
            LET persons = (
              FOR person IN person
                FILTER person.living_city_id == city._key
                RETURN person._key
            )
            RETURN {
              _key: city._key,
              zip: city.zip,
              city_name: city.city_name,
              country_name: city.country_name,
              living_person_count: LENGTH(persons)
            }
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('arango-inverted-index-join-length', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR city IN city
            LET persons = (
              FOR person IN person OPTIONS { indexHint: "inverted_stored_living_city_id", forceIndexHint: true }
                FILTER person.living_city_id == city._key
                RETURN person._key
            )
            RETURN {
              _key: city._key,
              zip: city.zip,
              city_name: city.city_name,
              country_name: city.country_name,
              living_person_count: LENGTH(persons)
            }
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('arango-join-collect', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR city IN city
            LET living_person_count = (
                FOR person IN person
                    FILTER person.living_city_id == city._key
                    COLLECT WITH COUNT INTO count
                    RETURN count
            )
            RETURN {
                _key: city._key,
                zip: city.zip,
                city_name: city.city_name,
                country_name: city.country_name,
                living_person_count: FIRST(living_person_count)
            }
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('arango-inverted-index-join-collect', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR city IN city
            LET living_person_count = (
                FOR person IN person OPTIONS { indexHint: "inverted_stored_living_city_id", forceIndexHint: true }
                    FILTER person.living_city_id == city._key
                    COLLECT WITH COUNT INTO count
                    RETURN count
            )
            RETURN {
                _key: city._key,
                zip: city.zip,
                city_name: city.city_name,
                country_name: city.country_name,
                living_person_count: FIRST(living_person_count)
            }
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mysql', async (deferred) => {
        const [cityJsMysql, personsJsMysql] = await Promise.all([
          prisma.$queryRaw`select * from city;`,
          prisma.$queryRaw`select living_city_id from person;`
        ]);
        const result = cityJsMysql.map((city) => ({
          id: city.id,
          zip: city.zip,
          city_name: city.city_name,
          country_name: city.country_name,
          living_person_count: personsJsMysql.filter((person) => person.living_city_id === city.id).length
        }));
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mysql-grouped', async (deferred) => {
        const [cityJsSqlGrouped, personJsSqlGrouped] = await Promise.all([
          prisma.$queryRaw`select * from city;`,
          prisma.$queryRaw`select living_city_id, count(*) as living_person_count from person group by living_city_id;`
        ]);
        const result = cityJsSqlGrouped.map((city) => ({
          id: city.id,
          zip: city.zip,
          city_name: city.city_name,
          country_name: city.country_name,
          living_person_count: personJsSqlGrouped.find((personGroup) => personGroup.living_city_id === city.id)?.living_person_count ?? 0
        }));
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mysql-n1', async (deferred) => {
        const cityJsSqlN1 = await prisma.$queryRaw`select * from city;`;
        const result = await Promise.all(
          cityJsSqlN1.map(async (city) => {
            return {
              id: city.id,
              zip: city.zip,
              city_name: city.city_name,
              country_name: city.country_name,
              living_person_count: (await prisma.$queryRaw`select count(*) as living_person_count from person where living_city_id = ${city.id};`)[0].living_person_count
            }
          })
        );
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mysql-n1-sync', async (deferred) => {
        const cityJsSqlN1Sync = await prisma.$queryRaw`select * from city;`;
        for(const city of cityJsSqlN1Sync)
          city.living_person_count = (await prisma.$queryRaw`select count(*) as living_person_count from person where living_city_id = ${city.id};`)[0].living_person_count;
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mongo', async (deferred) => {
        const [cityJsMongo, personsJsMongo] = await Promise.all([
          mongoose.connection.db.collection('city').find().toArray(),
          mongoose.connection.db.collection('person').find({}, {projection: {living_city_id: true}}).toArray()
        ]);
        const result = cityJsMongo.map((city) => ({
          _id: city._id,
          zip: city.zip,
          city_name: city.city_name,
          country_name: city.country_name,
          living_person_count: personsJsMongo.filter((person) => person.living_city_id === city._id).length
        }));
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mongo-grouped', async (deferred) => {
        const [cityJsMongoGrouped, personsJsMongoGrouped] = await Promise.all([
          mongoose.connection.db.collection('city').find().toArray(),
          mongoose.connection.db.collection('person').aggregate([
            {
              $group: {
                _id: '$living_city_id',
                living_person_count: {
                    $count: {}
                }
              }
            }
          ]).toArray()
        ]);
        const result = cityJsMongoGrouped.map((city) => ({
          _id: city._id,
          zip: city.zip,
          city_name: city.city_name,
          country_name: city.country_name,
          living_person_count: personsJsMongoGrouped.find((personGroup) => personGroup._id === city._id)?.living_person_count ?? 0
        }));
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mongo-n1', async (deferred) => {
        const cityJsMongoN1 = await mongoose.connection.db.collection('city').find().toArray();
        const result = await Promise.all(
          cityJsMongoN1.map(async (city) => ({
            _id: city._id,
            zip: city.zip,
            city_name: city.city_name,
            country_name: city.country_name,
            living_person_count: (await mongoose.connection.db.collection('person').aggregate([
              {
                $match: {
                  living_city_id: city._id
                }
              },
              {
                $count: 'living_person_count'
              }
            ]).toArray())[0].living_person_count
          }))
        );
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mongo-n1-sync', async (deferred) => {
        const cityJsMongoN1Sync = await mongoose.connection.db.collection('city').find().toArray();
        for(const city of cityJsMongoN1Sync)
          city.living_person_count = await mongoose.connection.db.collection('person').countDocuments({living_city_id: city._id});
        deferred.resolve();
      }, {defer: true})
      .add('js-group-mongo-n1-cursor', async (deferred) => {
        const cityJsMongoN1 = mongoose.connection.db.collection('city').find();
        const result = await Promise.all(
          await cityJsMongoN1.map(async (city) => ({
            _id: city._id,
            zip: city.zip,
            city_name: city.city_name,
            country_name: city.country_name,
            living_person_count: (await mongoose.connection.db.collection('person').aggregate([
              {
                $match: {
                  living_city_id: city._id
                }
              },
              {
                $count: 'living_person_count'
              }
            ]).toArray())[0].living_person_count
          })).toArray()
        );
        deferred.resolve();
      }, {defer: true})
      .add('js-group-arango', async (deferred) => {
        const [cityJsArango, personsJsArango] = await Promise.all([
          (await arangodb.query(aql`
            FOR city IN city
              RETURN city
          `)).all(),
          (await arangodb.query(aql`
            FOR person IN person
              RETURN person.living_city_id
          `)).all(),
        ]);
        const result = cityJsArango.map((city) => ({
          _key: city._key,
          zip: city.zip,
          city_name: city.city_name,
          country_name: city.country_name,
          living_person_count: personsJsArango.filter((person) => person.living_city_id === city._id).length
        }));
        deferred.resolve();
      }, {defer: true})
      .add('js-group-arango-grouped', async (deferred) => {
        const [cityJsArangoGrouped, personsJsArangoGrouped] = await Promise.all([
          (await arangodb.query(aql`
            FOR city IN city
              RETURN city
          `)).all(),
          (await arangodb.query(aql`
            FOR person IN person
              COLLECT city_key = person.living_city_id WITH COUNT INTO living_person_count
              RETURN {
                  city_key: city_key,
                  living_person_count
              }
          `)).all(),
        ]);
        const result = cityJsArangoGrouped.map((city) => ({
          _key: city._key,
          zip: city.zip,
          city_name: city.city_name,
          country_name: city.country_name,
          living_person_count: personsJsArangoGrouped.find((personGroup) => personGroup.city_key === city._key)?.living_person_count ?? 0
        }));
        deferred.resolve();
      }, {defer: true})
      .add('js-group-arango-n1', async (deferred) => {
        const cityJsArangoN1 = await (await arangodb.query(aql`
          FOR city IN city
            RETURN city
        `)).all();
        const result = await Promise.all(
          cityJsArangoN1.map(async (city) => ({
            _key: city._key,
            zip: city.zip,
            city_name: city.city_name,
            country_name: city.country_name,
            living_person_count: (await (await arangodb.query(aql`
              FOR person IN person
                FILTER person.living_city_id == ${city._key}
                COLLECT WITH COUNT INTO living_person_count
                RETURN living_person_count
            `)).all())[0],
          }))
        );
        deferred.resolve();
      }, {defer: true})
      .add('js-group-arango-n1-sync', async (deferred) => {
        const cityJsArangoN1Sync = await (await arangodb.query(aql`
          FOR city IN city
            RETURN city
        `)).all();
        for(const city of cityJsArangoN1Sync)
          city.living_person_count = (await (await arangodb.query(aql`
            FOR person IN person
              FILTER person.living_city_id == ${city._key}
              COLLECT WITH COUNT INTO living_person_count
              RETURN living_person_count
          `)).all())[0]
        deferred.resolve();
      }, {defer: true})
      .add('js-group-arango-n1-cursor', async (deferred) => {
        const cityJsArangoN1 = await arangodb.query(aql`
          FOR city IN city
            RETURN city
        `);
        const result = await Promise.all(
          await cityJsArangoN1.map(async (city) => ({
            _key: city._key,
            zip: city.zip,
            city_name: city.city_name,
            country_name: city.country_name,
            living_person_count: (await (await arangodb.query(aql`
              FOR person IN person
                FILTER person.living_city_id == ${city._key}
                COLLECT WITH COUNT INTO living_person_count
                RETURN living_person_count
            `)).all())[0],
          }))
        );
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['join-group-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  return res;
}

exports.testJoinLookup = async function() {
  const res = {};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-real-join', async (deferred) => {
        const result = await prisma.$queryRaw`
          select person.id, person.first_name, person.last_name, city.city_name, city.country_name
          from person
          join city on (person.living_city_id = city.id)
          where person.birth_city_id = 27 and person.living_city_id = 1;
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-real-lookup', async (deferred) => {
        const result = await mongoose.connection.db.collection('person')
          .aggregate([
            {
              $match: {
                birth_city_id: 27,
                living_city_id: 1
              }
            },
            {
              $lookup: {
                from: 'city',
                localField: 'living_city_id',
                foreignField: '_id',
                as: 'city_doc'
              }
            },
            {
              $unwind: '$city_doc'
            },
            {
              $project: {
                _id: true,
                first_name: true,
                last_name: true,
                city_name: '$city_doc.city_name',
                country_name: '$city_doc.country_name'
              }
            }
          ]).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-real-join', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR person IN person
            FILTER person.birth_city_id == '27'
            FILTER person.living_city_id == '1'
            LET city = FIRST(
              FOR c IN city
                FILTER c._key == person.living_city_id
                RETURN { city_name: c.city_name, country_name: c.country_name }
            )
            RETURN {
              _key: person._key,
              first_name: person.first_name,
              last_name: person.last_name,
              city_name: city.city_name,
              country_name: city.country_name
            }
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['join-group-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  return res;
}

// ORM
exports.testOrm = async function() {
  const res = {};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-where-prisma', async (deferred) => {
        const result = await prisma.person.findMany({
          where: {
            living_city_id: 6
          }
        });
        deferred.resolve();
      }, {defer: true})
      .add('mysql-where-raw', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.living_city_id = 6;
        `;
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['orm-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql-where-prisma', async (deferred) => {
        const result = await prisma.person.findMany({
          where: {
            first_name: {
              startsWith: 'A'
            }
          }
        });
        deferred.resolve();
      }, {defer: true})
      .add('mysql-where-raw', async (deferred) => {
        const result = await prisma.$queryRaw`
          select *
          from person
          where person.first_name like 'A%';
        `;
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['orm-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mongo-where-prisma', async (deferred) => {
        const result = await prismaMongo.person.findMany({
          where: {
            living_city_id: 6
          }
        });
        deferred.resolve();
      }, {defer: true})
      .add('mongo-where-prisma-raw', async (deferred) => {
        const result = await prismaMongo.person.findRaw({
          filter: {
            living_city_id: 6
          }
        });
        deferred.resolve();
      }, {defer: true})
      .add('mongo-where-mongoose', async (deferred) => {
        const result = await Person.find({living_city_id: 6}).lean();
        deferred.resolve();
      }, {defer: true})
      .add('mongo-where-mongoose-raw', async (deferred) => {
        const result = await mongoose.connection.db.collection('person').find({living_city_id: 6}).toArray();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['orm-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  return res;
}

// Array
exports.testArray = async function() {
  const res = {};

  await new Promise((resolve) =>
    new Benchmark.Suite()
      .add('mysql', async (deferred) => {
        const result = await prisma.$queryRaw`
          select trip.*
            from trip
            left join trip_person on (trip_person.trip_id = trip.id)
            where trip_person.person_id = 111589
          union
          select trip.*
            from trip
            left join trip_city on (trip_city.trip_id = trip.id)
            where trip_city.city_id = 15
          union
          select trip.*
            from trip
            left join trip_city on (trip_city.trip_id = trip.id)
            left join trip_person on (trip_person.trip_id = trip.id)
            where (trip_city.trip_id is null and trip_person.trip_id is null);
        `;
        deferred.resolve();
      }, {defer: true})
      .add('mongo-array-size', async (deferred) => {
        const result = await mongoose.connection.db.collection('trip').find(
          {
            $or: [
              {person_ids: 111589},
              {city_ids: 15},
              {person_ids: {$size: 0}, city_ids: {$size: 0}},
            ]
          },
          {id: true, headline: true, description: true}
        ).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('mongo-array-additional-field', async (deferred) => {
        const result = await mongoose.connection.db.collection('trip').find(
          {
            $or: [
              {person_ids: 111589},
              {city_ids: 15},
              {no_person_and_city: true}
            ]
          },
          {id: true, headline: true, description: true}
        ).toArray();
        deferred.resolve();
      }, {defer: true})
      .add('arango-subquery', async (deferred) => {
        const result = await (await arangodb.query(aql`
          LET city_trip_ids = (
            FOR trip_city IN trip_city
              FILTER trip_city._to == 'city/15'
              RETURN trip_city._from
          )
          LET person_trip_ids = (
            FOR trip_person IN trip_person
              FILTER trip_person._to == 'person/111589'
              RETURN trip_person._from
          )
          FOR trip IN trip
            LET city_count = FIRST(
              FOR trip_city IN trip_city
                FILTER trip_city._from == trip._id
                COLLECT WITH COUNT INTO c_count
                RETURN c_count
            )
            LET person_count = FIRST(
              FOR trip_person IN trip_person
                FILTER trip_person._from == trip._id
                COLLECT WITH COUNT INTO p_count
                RETURN p_count
            )
            FILTER trip._id IN city_trip_ids
              OR trip._id IN person_trip_ids
              OR (city_count == 0 AND person_count == 0)
            RETURN {_key: trip._key, headline: trip.headline, description: trip.description}
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('arango-subtraversal', async (deferred) => {
        const result = await (await arangodb.query(aql`
          LET city_trip_ids = (
            FOR trip_city IN trip_city
              FILTER trip_city._to == 'city/15'
              RETURN trip_city._from
          )
          LET person_trip_ids = (
            FOR trip_person IN trip_person
              FILTER trip_person._to == 'person/111589'
              RETURN trip_person._from
          )
          FOR trip IN trip
            LET city_count = FIRST(
              FOR v IN OUTBOUND trip._id trip_city
                COLLECT WITH COUNT INTO c_count
                RETURN c_count
            )
            LET person_count = FIRST(
              FOR v IN OUTBOUND trip._id trip_person
                COLLECT WITH COUNT INTO p_count
                RETURN p_count
            )
            FILTER trip._id IN city_trip_ids
              OR trip._id IN person_trip_ids
              OR (city_count == 0 AND person_count == 0)
            RETURN {_key: trip._key, headline: trip.headline, description: trip.description}
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .add('arango-array', async (deferred) => {
        const result = await (await arangodb.query(aql`
          FOR trip IN trip
            FILTER 15 IN trip.city_ids
              OR 111589 IN trip.person_ids
              OR (LENGTH(trip.city_ids) == 0 AND LENGTH(trip.person_ids) == 0)
            RETURN {_key: trip._key, headline: trip.headline, description: trip.description}
        `)).all();
        deferred.resolve();
      }, {defer: true})
      .on('cycle', (event) => {
        console.log(`${String(event.target)}, mean: ${event.target.stats.mean}`);
        res[event.target.name] = {
          target: String(event.target),
          sample: event.target.stats.sample,
          mean: event.target.stats.mean
        };
      })
      .on('complete', function() {
        res['array-fastest'] = this.filter('fastest').map('name');
        resolve();
      })
      .run({async: false, defer: true})
  );

  return res;
}
