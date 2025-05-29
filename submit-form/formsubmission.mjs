// Takes user input and submit the data to payload  and redirects to '/' . also create a submittedinfo file.

import { createServer } from "node:http";
import { writeFileSync } from "node:fs";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form Submission</title></head>");
    res.write("<body>");
    res.write("<h1>Enter Your Details</h1>");
    res.write('<form method="POST" action="/submit">');
    res.write('<label for="name">Name:</label>');
    res.write('<input type="text" id="name" name="username ">');
    res.write(' <br><label for="male">  Male </label>');
    res.write('<input type="radio" id="male" name="gender" value = "male">');
    res.write('<br> <label for="female"> Female </label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<br>  <input type = submit value = "Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method == "POST") {
    writeFileSync(
      "submittedinfo.txt",
      "file is created after submit   request, check data on network payload"
    );
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
