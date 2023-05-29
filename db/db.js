const PrismaMysqlClient = require('./generated/mysql-client').PrismaClient;
const PrismaMongoClient = require('./generated/mongo-client').PrismaClient;
const mongoose = require('mongoose');
const arangojs = require('arangojs');

/***********/
/** MySQL **/
/***********/

/*

  MySQL Database Schema

  create database dbPerformance;

  create table city (
    id integer not null primary key,
    zip varchar(15) not null,
    city_name varchar(100) not null,
    country_name varchar(100) not null
  );

  create table person (
    id integer not null primary key,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    gender varchar(1) not null,
    languages varchar(30),
    occupation varchar(100),
    interests varchar(500),
    birthdate datetime not null,
    birth_city_id integer not null,
    foreign key (birth_city_id) references city(id) on update cascade on delete restrict,
    living_city_id integer not null,
    foreign key (living_city_id) references city(id) on update cascade on delete restrict,
    index (birth_city_id, living_city_id)
  );

  create table trip (
    id integer not null primary key,
    headline varchar(100) not null,
    description text not null
  );

  create table trip_city (
    trip_id integer not null,
    foreign key (trip_id) references trip(id) on update cascade on delete restrict,
    city_id integer not null,
    foreign key (city_id) references city(id) on update cascade on delete restrict,
    primary key(trip_id, city_id)
  );

  create table trip_person (
    trip_id integer not null,
    foreign key (trip_id) references trip(id) on update cascade on delete restrict,
    person_id integer not null,
    foreign key (person_id) references person(id) on update cascade on delete restrict,
    primary key(trip_id, person_id)
  );
*/

exports.prisma = new PrismaMysqlClient({
  //log: ["query"]
});

/*************/
/** MongoDB **/
/*************/

exports.prismaMongo = new PrismaMongoClient({
  //log: ["query"]
});

const m = new mongoose.Mongoose();
m.connect('mongodb://admin:admin@localhost:27017/dbPerformance?authSource=admin&retryWrites=false&replicaSet=rs0');

const CitySchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  city_name: {
    type: String,
    required: true
  },
  country_name: {
    type: String,
    required: true
  }
});

const City = mongoose.model('City', CitySchema, 'city');
exports.City = City;

const PersonSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  languages: {
    type: String
  },
  occupation: {
    type: String
  },
  interests: {
    type: String
  },
  birthdate: {
    type: Date,
    required: true
  },
  birth_city_id: {
    type: Number,
    required: true,
    ref: 'City'
  },
  living_city_id: {
    type: Number,
    required: true,
    ref: 'City'
  }
});

PersonSchema.index({birth_city_id: 1});
PersonSchema.index({living_city_id: 1});
PersonSchema.index({birth_city_id: 1, living_city_id: 1});

const Person = mongoose.model('Person', PersonSchema, 'person');
exports.Person = Person;

const TripSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  person_ids: {
    type: [Number],
    required: true,
    ref: 'Person'
  },
  city_ids: {
    type: [Number],
    required: true,
    ref: 'City'
  },
  no_person_and_city: {
    type: Boolean,
    required: true
  }
});

TripSchema.index({person_ids: 1});
TripSchema.index({city_ids: 1});
TripSchema.index({no_person_and_city: 1});

const Trip = mongoose.model('Trip', TripSchema, 'trip');
exports.Trip = Trip;

exports.mongoose = m;

/**************/
/** ArangoDB **/
/**************/

const arangodb = new arangojs.Database({
  url: 'tcp://127.0.0.1:8529',
  databaseName: 'dbPerformance',
  auth: {
    username: 'root',
    password: 'initial'
  }
});
arangodb.listCollections().then(async (collections) => {
  if(!collections.find((collection) => collection.name === 'city')) {
    await arangodb.createCollection('city');
  }
  
  if(!collections.find((collection) => collection.name === 'person')) {
    const person = await arangodb.createCollection('person');
    await Promise.all([
      // person.ensureIndex({type: 'persistent', fields: ['first_name'], name: 'persistent_first_name'}),
      person.ensureIndex({type: 'persistent', fields: ['living_city_id'], storedValues: ['first_name', 'last_name'], name: 'persistent_stored_living_city_id'}),
      person.ensureIndex({type: 'persistent', fields: ['birth_city_id'], storedValues: ['first_name', 'last_name'], name: 'persistent_stored_birth_city_id'}),
      person.ensureIndex({type: 'persistent', fields: ['birth_city_id', 'living_city_id'], storedValues: ['first_name', 'last_name'], name: 'persistent_stored_birth_city_id_living_city_id'}),
      // person.ensureIndex({type: 'inverted', fields: ['first_name'], name: 'inverted_first_name'}),
      person.ensureIndex({type: 'inverted', fields: ['living_city_id'], storedValues: ['first_name', 'last_name'], name: 'inverted_stored_living_city_id'}),
      person.ensureIndex({type: 'inverted', fields: ['birth_city_id'], storedValues: ['first_name', 'last_name'], name: 'inverted_stored_birth_city_id'}),
      person.ensureIndex({type: 'inverted', fields: ['birth_city_id', 'living_city_id'], storedValues: ['first_name', 'last_name'], name: 'inverted_stored_birth_city_id_living_city_id'}),
    ]);
  }

  if(!collections.find((collection) => collection.name === 'trip')) {
    const trip = await arangodb.createCollection('trip');
    await Promise.all([
      trip.ensureIndex({type: 'persistent', fields: ['person_ids'], storedValues: [], name: 'persistent_person_ids'}),
      trip.ensureIndex({type: 'persistent', fields: ['city_ids'], storedValues: [], name: 'persistent_city_ids'}),
    ]);
  }
  if(!collections.find((collection) => collection.name === 'trip_person')) {
    await arangodb.createEdgeCollection('trip_person');
  }
  if(!collections.find((collection) => collection.name === 'trip_city')) {
    await arangodb.createEdgeCollection('trip_city');
  }
});
exports.arangodb = arangodb;
