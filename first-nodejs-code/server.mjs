// This is a simple Node.js server that responds with HTML content.

import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Node.js Server</title></head>");
  res.write("<body>");
  res.write("<h1>Hello, World!</h1>");
  res.write("<p>This is my first Node.js server!</p>");
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
