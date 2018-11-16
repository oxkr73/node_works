const events = require("events");
const eventEmitter = new events.EventEmitter();

function dateNow() {
  let now = new Date();
  console.log("now is " + now.getTime());
}

function dateString() {
  let now = new Date();
  console.log("day is " + now.toLocaleString());
}

function counter() {
  console.log("Count is " + count);
  return count++;
}
let intervalTime = 1000;
let count = 0;

eventEmitter.on("show_count", counter);
eventEmitter.on("show_now", dateNow);
eventEmitter.on("show_string", dateString);

let intervalOne = setInterval(function() {
  eventEmitter.emit("show_count");
  console.log("-");
}, intervalTime);

let intervalTwo = setInterval(function() {
  if (count > 3) {
    eventEmitter.emit("show_now");
    console.log("--");
  }
}, intervalTime);

let intervalThree = setInterval(function() {
  if (count > 6 && count < 9) {
    eventEmitter.emit("show_string");
    eventEmitter.emit("show_string");
    clearInterval(intervalTwo);
    eventEmitter.off("show_now", dateNow);
    console.log("show_now is off");
    console.log("---");
  } else if (count > 9 && count < 12) {
    eventEmitter.off("show_string", dateString);
    console.log("show_string is off");
    console.log("----");
  } else if (count >= 12) {
    eventEmitter.off("show_count", counter);
    clearInterval(intervalOne);
    console.log("count is off at " + count);
  }
}, intervalTime);

let intervalFour = setInterval(function() {
  console.log("show_count: " + eventEmitter.listenerCount("show_count"));
  console.log("show_now: " + eventEmitter.listenerCount("show_now"));
  console.log("show_string: " + eventEmitter.listenerCount("show_string"));
  console.log(eventEmitter.eventNames());
  if (eventEmitter.eventNames().length == 0) {
    process.exit();
  }
}, intervalTime);

process.on("exit", () => {
  console.log("Exit from program");
});
