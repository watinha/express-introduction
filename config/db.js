import { MongoClient } from 'mongodb';

const DB = {
  uri: process.env['MONGODB_URI'] ?
    process.env['MONGODB_URI'] : 'mongodb://mongo/test'
};

const client = new MongoClient(DB.uri);

export default client;
