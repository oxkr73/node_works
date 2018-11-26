const fs = require("fs");
const readStream = fs.createReadStream("./videoplayback.mp4");

const http = require("http");
const server = http.createServer();
server.on("request", function(req, res) {
  console.log(readStream.bytesRead);
  res.writeHead(200, { "Content-Type": "video/mp4" });

  readStream.pipe(res);
});
server.listen(4000);
