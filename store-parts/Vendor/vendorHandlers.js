"use strict";

const events = require("../../events");

function storid(payload) {
  // time
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  //
  console.log(`EVENT { event: in-transit,`);
  console.log(`time: ${dateTime}`);
  console.log(`payload:`);
  console.log(payload);

  //
  events.emit("in-transit", payload);
}

// export
module.exports = { storid };
