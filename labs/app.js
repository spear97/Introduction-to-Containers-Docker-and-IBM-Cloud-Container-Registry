// Import the Express module
var express = require('express');
// Import the OS module to get the hostname
var os = require("os");
// Get the hostname of the system
var hostname = os.hostname();
// Create an Express application
var app = express();

// Define a route for the root URL
app.get('/', function(req, res) {
  // Send a response with a greeting including the hostname
  res.send('Hello world from ' + hostname + '! Your app is up and running!\n');
});

// Start the Express server and listen on port 8080
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.');
});
