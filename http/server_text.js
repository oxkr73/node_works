// bien resuleto en server_ts.js


let timeNow = () => {
  let now = Date.now();
  return now.toString() + " ";
};

const http = require("http");
const server = http.createServer();
server.on("request", function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  let result = setInterval(timeNow, 100);
  console.log(result.);
  res.write(result);
});
server.listen(4000);
