import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = "3000";

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write(
    "<div style='width:400px;display:flex;justify-content:space-between' ><a href='/'>home</a><a href='/about'>about</a><a href='/contact'>contact Us</a> </div>"
  );

  switch (req.url) {
    case "/":
      res.write("<h1>Home page<h1>");
      break;
    case "/about":
      res.write("<h1>about page<h1>");
      break;
    case "/contact":
      res.write("<h1>contact page<h1>");
      break;
  }
  res.write("</body>");
  res.write("</html>");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
