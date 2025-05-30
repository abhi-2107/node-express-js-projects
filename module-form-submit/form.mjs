// Takes user input and submit the data to payload  and redirects to '/' . also create a submittedinfo file and stores the input data into that file .

import { writeFileSync } from "node:fs";

const handleServerRequest = (req, res) => {
  console.log(req.url, req.method);
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log("row full body :" + fullBody);
      const params = new URLSearchParams(fullBody);
      console.log("Params :" + params);
      const bodyObject = Object.fromEntries(params);
      writeFileSync("submittedinfo.txt", JSON.stringify(bodyObject));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

export { handleServerRequest };
