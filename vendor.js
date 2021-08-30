"use strict";

// const events = require("../../events");
require("dotenv").config(); // dotenv
const HOST = process.env.HOST || "http://localhost:3010";

const faker = require("faker"); // faker

const io = require("socket.io-client"); // io-client
const socket = io.connect(`${HOST}/caps`); // namespace

//
socket.on("done", handelDelivered);

// socket.on("delivered", handelDelivered);
//
setInterval(() => {
  // data
  let payload = {
    store: process.env.STOR_NAME,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
    // DriverName: faker.name.findName(),
  };

  socket.emit("pickup", payload); ///////////
}, 5000); // 5 seconds

// from driver.js

function handelDelivered(payload) {
  // data
  console.log(`Thank you for delivering  ${payload.orderID}`);
}
