const fs = require("fs");
const readJson = fs.createReadStream("./movieDetails.json");

let localContent = [];

readJson.on("data", chunk => {
  console.log(chunk);
  localContent.push(chunk);
});

readJson.on("end", () => {
  console.log("There will be no more data.");
  //console.log(localContent.toString());
});
