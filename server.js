const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
// var apiRoutes = require('./serverjson.js');
const jsonServer = require('json-server');
const server = jsonServer.create();
const routerJson = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use('/api', middlewares);
app.use('/api', routerJson);
// app.use('/api', apiRoutes);
app.listen(process.env.PORT || 4200);
