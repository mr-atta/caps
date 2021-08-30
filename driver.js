"use strict";

// const events = require("../../events");
require("dotenv").config(); // dotenv
const HOST = process.env.HOST || "http://localhost:3010";

const io = require("socket.io-client"); // io-client
const socket = io.connect(`${HOST}/caps`); // namespace

// require("../Vendor/vendor");
// require("../Vendor/vendorHandlers");

// from caps.js
socket.on("driver", driverData);

function driverData(payload) {
  //   console.log("rrrrrrrrrrrrrrrrr", payload);

  setTimeout(() => {
    // data
    console.log(`picked up ${payload.orderID}`);

    //
    socket.emit("in-transit", payload);
  }, 1500); // 1.5 seconds

  setTimeout(() => {
    // data
    console.log(`delivered ${payload.orderID}`);

    //
    socket.emit("delivered", payload);
  }, 4500); // 3 seconds after the 1.5 seconds
}
