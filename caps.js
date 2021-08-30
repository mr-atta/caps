"use strict";

// const events = require("./events"); // require the events

require("dotenv").config(); // dotenv

// socket.io
const io = require("socket.io")(process.env.PORT || 3000); // http://localhost:3020
// namespace
const capsSystem = io.of("/caps"); //  io.of('/') >>> http://localhost:3020/caps

// require stor parts
// require("./vendor");
// require("./driver");
//

io.on("connection", (socket) => {
  console.log("connection to the caps >> done");
});

capsSystem.on("connection", (socket) => {
  socket.on("pickup", (payload) => {
    // call
    outputStorData("pickup", payload);
    // emit
    capsSystem.emit("driver", payload);
  });
  // from driver.js
  socket.on("in-transit", (payload) => {
    // call
    outputStorData("in-transit", payload);
  });
  // from driver.js
  socket.on("delivered", (payload) => {
    // call
    outputStorData("delivered", payload);
    // emit
    capsSystem.emit("done", payload);
  });
});

function outputStorData(socket, payload) {
  // time
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  //
  console.log(`EVENT { event: ${socket},`);
  console.log(`time: ${dateTime}`);
  console.log(`payload:`);
  console.log(payload);
  //
}
