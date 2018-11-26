require("http")
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });
    let timmer = 10;
    let interval = setInterval(() => {
      for (let index = 0; index < 100; index++) {
        res.write(Date.now() + " ");
      }
      timmer--;
      if (timmer == 0) {
        clearInterval(interval);
        res.end();
      }
    }, 1000);
  })
  .listen(4000);
