const express = require('express');
const { aql } = require('arangojs');
const apicache = require('apicache');
const { arangodb } = require('../db/db');
const router = express.Router();

let cache = apicache.options({
  debug: false,
  headers: {
    'cache-control': 'no-cache'
  },
  trackPerformance: true
}).middleware;

router.get('/normal', async function(req, res, next) {
  try {
    const {birth_city_id, living_city_id} = req.body;

    const result = await (await arangodb.query(
      `
        FOR person IN person
        FILTER person.birth_city_id == @birth_city_id
        FILTER person.living_city_id == @living_city_id
        RETURN {first_name: person.first_name, last_name: person.last_name, birth_city_id: person.birth_city_id, living_city_id: person.living_city_id}
      `,
      {birth_city_id, living_city_id}
    )).all();

    res.send(result).status(200);

    return next();
  } catch(error) {
    return next(error);
  }
});

router.get('/normal-slow', async function(req, res, next) {
  try {
    const {first_name, last_name} = req.body;

    const result = await (await arangodb.query(
      `
        FOR person IN person
        FILTER person.first_name == @first_name
        FILTER person.last_name == @last_name
        RETURN {first_name: person.first_name, last_name: person.last_name}
      `,
      {first_name: 'Luna', last_name: 'Ray'}
    )).all();

    res.send(result).status(200);

    return next();
  } catch(error) {
    return next(error);
  }
});

router.get(
  '/apicache',
  cache(
    '1 minute',
    undefined,
    {
      appendKey: (req, res) => `${req.body.birth_city_id} ${req.body.living_city_id}`
    }
  ),
  async function(req, res, next) {
    try {
      const {birth_city_id, living_city_id} = req.body;

      const result = await (await arangodb.query(
        `
          FOR person IN person
          FILTER person.birth_city_id == @birth_city_id
          FILTER person.living_city_id == @living_city_id
          RETURN {first_name: person.first_name, last_name: person.last_name, birth_city_id: person.birth_city_id, living_city_id: person.living_city_id}
        `,
        {birth_city_id, living_city_id}
      )).all();

      res.send({result}).status(200);

      return next();
    } catch(error) {
      return next(error);
    }
  }
);

router.get(
  '/apicache-slow',
  cache(
    '1 minute',
    undefined,
    {
      appendKey: (req, res) => `${req.body.birth_city_id} ${req.body.living_city_id}`
    }
  ),
  async function(req, res, next) {
    try {
      const {first_name, last_name} = req.body;

      const result = await (await arangodb.query(
        `
          FOR person IN person
          FILTER person.first_name == @first_name
          FILTER person.last_name == @last_name
          RETURN {first_name: person.first_name, last_name: person.last_name}
        `,
        {first_name: 'Luna', last_name: 'Ray'}
      )).all();

      res.send({result}).status(200);

      return next();
    } catch(error) {
      return next(error);
    }
  }
);

module.exports = router;
