"use strict";

// this is a singleton for the events class
const Events = require("events"); // import the Events class

const events = new Events(); // only one instance created  // use the Events class to create obj called events

module.exports = events; // export
