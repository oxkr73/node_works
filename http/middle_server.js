const http = require("http");
const bodyParser = require("body-parser");
const connect = require("connect");
const app = connect();

let isLogin = false;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("you posted:\n");
  res.end(JSON.stringify(req.body, null, 2));
});
/*
app.use((req, res, next) => {
  if (req.url.indexOf("favicon.ico") > 0) {
    return;
  }
  next();
});
app.use((req, res, next) => {
  if (isLogin) return next();
  else {
    console.log("No estás logado");
    res.end("No estas logado");
  }
});
app.use((request, response, next) => {
  response.setHeader("Content-Type", "text/html");
  response.end("Hello <strong>HTTP</strong>!");
});
*/
app.listen(4000);
http.createServer(app);
