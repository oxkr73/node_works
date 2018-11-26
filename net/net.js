const net = require("net");

const server = net.createServer().listen(4001);

server.on("listening", () => console.log("Servidor escuchando"));

server.on("connection", socket => {
  socket.on("data", data => {
    console.log(data.toString());
    socket.write(data);
  });
});

server.on("error", err => console.log(err));
server.on("close", () => console.log("close"));
