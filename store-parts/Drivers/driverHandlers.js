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
    console.log(
      `DRIVER :: ${DriverName} :: picked up the order with id : ${payload.orderID}`
    );

    // time
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    console.log(dateTime);

    events.emit("delivered", payload);
  }, 1000); // 1 seconds

  setTimeout(() => {
    // data
    console.log(
      `VENDOR :: Thank you ${DriverName}  for delivering the order with id : ${payload.orderID}`
    );

    // time
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    console.log(dateTime);

    //
    events.emit("delivered", payload);
  }, 3000); // 3 seconds
}

module.exports = { driverid };
