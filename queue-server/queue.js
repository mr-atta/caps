"use strict";

require("dotenv").config(); // dotenv

// socket.io
const io = require("socket.io")(process.env.PORT || 3000); // http://localhost:3020
// namespace
const capsSystem = io.of("/caps"); //  io.of('/') >>> http://localhost:3020/caps

const uuid = require("uuid").v4; // OR use >> faker

//

// undelivered message queue for storing queued messages
const queueMSG = {
  order: {}, // event name, message id
};

capsSystem.on("connection", (socket) => {
  console.log("connection >>> done");

  // listen on pickUp from vendor.js
  socket.on("pickup", pickupHandller);

  // pickup Handller
  function pickupHandller(payload) {
    const id = uuid(); // random id

    // console.log("id >>>>>>>>> ", id);

    queueMSG.order[id] = payload; // save the massege by id

    // emit "added"
    socket.emit("added", payload);

    // emit "order" to driver.js
    capsSystem.emit("order", { id: id, payload: queueMSG.order.id });

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

    //
    console.log(`EVENT { event: pickUp,`);
    console.log(`time: ${dateTime}`);
    console.log(`payload:`);
    console.log(payload);
    //
  }

  // listen received
  socket.on("received", (payload) => {
    delete queueMSG.order[payload.id];
  });

  // listen getAll  from  driver.js
  socket.on("getAll", () => {
    //
    Object.keys(queueMSG.order).forEach((id) => {
      //
      socket.emit("order", { id: id, payload: queueMSG.order.id }); // to driver.js
    });
  });

  // listen delivered from  driver.js
  socket.on("delivered", (payload) => {
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

    //
    console.log(`EVENT { event: delivered,`);
    console.log(`time: ${dateTime}`);
    console.log(`payload:`);
    console.log(payload);
    //
    //
    capsSystem.emit("done", payload); // to vendor.js
  });
});
