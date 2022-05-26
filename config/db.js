const DB = {
  uri: process.env['MONGODB_URI'] ?
    process.env['MONGODB_URI'] : 'mongodb://mongo/test'
};

export default DB;
