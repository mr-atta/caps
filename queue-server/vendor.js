"use strict";

require("dotenv").config(); // dotenv
const HOST = process.env.HOST || "http://localhost:3010";

const faker = require("faker"); // faker

const io = require("socket.io-client"); // io-client
const socket = io.connect(`${HOST}/caps`); // namespace

//
setInterval(() => {
  // data
  let payload = {
    store: process.env.STOR_NAME,
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress(),
  };

  socket.emit("pickup", payload); // to queue.js
}, 5000); // 5 seconds

// listen from queue.js
socket.on("done", (payload) => {
  console.log(`Thank you for delivered  ${payload.id}`);
});

// listen from queue.js
socket.on("added", (payload) => {
  console.log(`Thank you for added  ${payload.orderID}`);
});
