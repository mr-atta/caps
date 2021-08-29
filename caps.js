"use strict";

const events = require("./events"); // require the events
require("dotenv").config();
const faker = require("faker");

// require stor parts
require("./store-parts/Drivers/driver");
require("./store-parts/Vendor/vendor");
//

//
setInterval(() => {
  // data
  let data = {
    store: process.env.STOR_NAME,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
    // DriverName: faker.name.findName(),
  };

  events.emit("pickup", data);
}, 5000); // 5 seconds
