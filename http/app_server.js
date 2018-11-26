require("http")
  .createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write("Hi <b>HTTP</b>");
    res.end();
  })
  .listen(4000);
