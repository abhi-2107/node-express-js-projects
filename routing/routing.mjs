import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body>");
    res.write("<h1>Welcome to the Home Page!</h1>");
    res.write("check about page also");
    res.write("</body>");
    res.write("</html>");
  } else if (req.url === "/about") {
    res.write("<html>");
    res.write("<head><title>About</title></head>");
    res.write("<body>");
    res.write("<h1>About Us</h1>");
    res.write("<p>This is the about page.</p>");
    res.write("</body>");
    res.write("</html>");
  } else {
    res.write("<html>");
    res.write("<head><title>404 Not Found</title></head>");
    res.write("<body>");
    res.write("<h1>Page Not Found</h1>");
    res.write("<p>The page you are looking for does not exist.</p>");
    res.write("</body>");
    res.write("</html>");
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
