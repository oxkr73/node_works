var net = require("net");
var server = net.createServer();

server.on("error", function(err) {
  console.log("Server error:", err.message);
});
server.on("close", function() {
  console.log("Server closed");
});
server.listen(4001);

var sockets = [];

server.on("connection", function(socket) {
  console.log("got a new connection");

  socket.write("Como te llamas? ");

  sockets.push(socket);

  console.log(`Hay ${sockets.length} conectados`);

  let userName = [];
  let userChat = [];
  let currentChat = [];

  socket.on("data", function(data) {
    //console.log("got data:", data.toString());
    if (data[0] !== 13) {
      if (typeof userName !== "string") {
        userName.push(data);
      } else {
        currentChat.push(data);
      }
    } else {
      if (typeof userName !== "string") {
        userName = userName.join("");
        userChat.push(`Chat de ${userName}`);
      }

      socket.write(`${userName} : `);
      currentChat = currentChat.join("");
      userChat.push(currentChat);
      currentChat = [];
    }

    sockets.forEach(function(otherSocket) {
      if (otherSocket !== socket) {
        console.log(userName);
        console.log(currentChat);
        otherSocket.write(`${userName} dice : ${data}`);
      }
    });
  });
});
