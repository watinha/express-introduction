import { MongoClient as client } from 'mongodb';

import DB from '../config/db.js';

export default class User {

  static async find () {
    const conn = await client.connect(DB.uri),
          db = conn.db();

    let users = await db.collection('user')
                        .find({}, { name: 1, job: 1, age: 1})
                        .sort({ name: 1 })
                        .limit(5)
                        .toArray();
    conn.close();
    return users;
  }

}
