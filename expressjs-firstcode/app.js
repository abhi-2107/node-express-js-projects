// We have used Express to help with Node js

import express from "express";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

//middleware without specific http request, executes on every url
//next() method must be called in order to move to next middleware
//response ends when we give res.send('some content')
app.use((req, res, next) => {
  console.log("1st middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("2nd middleware", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("3rd middleware", req.url, req.method);
//   res.send(
//     "<h1>3rd middleware , response ends here because <code>res.send()<code> is called <h1>"
//   );
// });

//get method route
app.get("/", (req, res, next) => {
  console.log("4th middleware", req.url, req.method);
  res.send(
    "4th middleware : home page get req. <br> <a href='/contact-us'>Contact us</a> "
  );
});
app.get("/contact-us", (req, res, next) => {
  console.log("5th middleware", req.url, req.method);
  res.send(`5th middleware
     <h2>Contact Form</h2>
  <form action="/contact-us" method="POST">
    <label for="name">Name:</label><br />
    <input type="text" id="name" name="username" required /><br /><br />

    <label for="email">Email:</label><br />
    <input type="email" id="email" name="email" required /><br /><br />

    <button type="submit">Submit</button>
  </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("cantact us post data", req.url, req.method, req.body);
  res.send(
    `Received submission:<br>Name: ${req.body.username}<br>Email: ${req.body.email}`
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
