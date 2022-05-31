import client from '../config/db.js';

export default class User {

  constructor ({ _id, name, age }) {
    this.name = name;
    this.age = age;
    if (this._id)
      this._id = _id;
  }

  async save () {
    const conn = await client.connect(),
          db = conn.db();

    db.insertOne(this);
    conn.close();
  }

  static async find ({ name, age }) {
    const conn = await client.connect(),
          db = conn.db(),
          query = {};

    if (name) query['name'] = new RegExp(`${name}`, 'i');
    if (age) query['age'] = { $gte: parseInt(age) };

    let users = await db.collection('user')
                        .find(query)
                        .sort({ name: 1 })
                        .limit(5)
                        .toArray();
    conn.close();
    return users.map((user) => new User(user));
  }

}
