"use strict";

const events = require("../../events");
const handlers = require("./driverHandlers");

events.on("in-transit", handlers.driverid);
