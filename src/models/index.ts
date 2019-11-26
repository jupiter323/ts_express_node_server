const mongoose = require('mongoose');

module.exports.connect = (uri:any) => {
  mongoose.connect(uri,  { autoIndex: true,useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true });
  // plug in the promise library:
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err:any) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./company');

};
