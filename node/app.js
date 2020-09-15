var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Node.js</h1>");
    res.write('<div>热更新</div><input type="button" value="按钮">');
    res.end("<p>Hello World</p>");
  })
  .listen(5000);
console.log("HTTP server is listening at :http://127.0.0.1:5000 .");
/*
var server = http.createServer();
server.on("request", function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Node.js</h1>");
  res.end("<p>Hello World</p>");
  
});
server.listen(3000, function () {
  console.log("服务器启动成功，http://127.0.0.1:5000 ");
});
*/
