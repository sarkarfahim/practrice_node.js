const http = require("http");
const fs = require("fs");
const { error } = require("console");

const server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is Home page");
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is About page");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("This is Contact page");
  }

  //
  else if (req.url == "/file-write") {
    fs.writeFile("demo1.text", "hello world", function (error) {
      if (error) {
        res.end("something went wrong");
      } else {
        res.end("file write success");
      }
    });
  }
});

server.listen(5500);
console.log("server is running..");
