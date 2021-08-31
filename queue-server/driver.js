"use strict";

require("dotenv").config(); // dotenv
const HOST = process.env.HOST || "http://localhost:3010";

const io = require("socket.io-client"); // io-client
const socket = io.connect(`${HOST}/caps`); // namespace

socket.emit("getAll"); // to queue.js

// from queue.js
socket.on("order", (payload) => {
  // to queue.js
  socket.emit("received", payload);

  setTimeout(() => {
    // data
    console.log(`picked up ${payload.id}`);

    //
    // socket.emit("in-transit", payload);
  }, 1500); // 1.5 seconds

  setTimeout(() => {
    // data
    console.log(`delivered ${payload.id}`);

    //
    socket.emit("delivered", payload); // to queue.js
  }, 4500); // 3 seconds after the 1.5 seconds
});
