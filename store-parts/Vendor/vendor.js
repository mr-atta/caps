"use strict";

const events = require("../../events");
const handlers = require("./vendorHandlers");

events.on("pickup", handlers.storid);
