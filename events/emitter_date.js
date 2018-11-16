const events = require("events");
const eventEmitter = new events.EventEmitter();

function dateInterval() {
  setInterval(function() {
    let now = Date.now();
    console.log("data_generated " + now);
  }, 500);
}

eventEmitter.on("show_date", dateInterval);
eventEmitter.emit("show_date");
