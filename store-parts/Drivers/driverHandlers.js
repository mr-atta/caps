"use strict";

const events = require("../../events");
const faker = require("faker");

require("../Vendor/vendor");
require("../Vendor/vendorHandlers");

function driverid(payload) {
  //   console.log("rrrrrrrrrrrrrrrrr", payload);

  //   console.log(payload.orderID, payload.DriverName);

  const DriverName = faker.name.findName();

  setTimeout(() => {
    // data
    console.log(`DRIVER : picked up ${payload.orderID}`);

    events.emit("delivered", payload);
  }, 1000); // 1 seconds

  setTimeout(() => {
    // data
    console.log(`DRIVER :delivered ${payload.orderID}`);

    //
    events.emit("delivered", payload);
  }, 3000); // 3 seconds
}

module.exports = { driverid };
