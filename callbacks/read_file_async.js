const fs = require("fs");

let data;

fs.readFile("./input.txt", "utf8", function(err, data) {
  if (err) return console.error(err);
  console.log(data);
  data = data;
});

console.log(data);
console.log("Fin del programa");
