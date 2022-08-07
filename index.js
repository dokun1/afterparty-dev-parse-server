var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var app = express();

require('dotenv').config();

var api = new ParseServer({
  databaseURI: process.env.MONGO_URI, // Connection string for your MongoDB database
  appId: process.env.APPLICATION_ID,
  masterKey: process.env.MASTER_KEY, // Keep this key secret!
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});
