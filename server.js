const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler.js");
const userRouter = require("./routes/users");
const aboutRouter = require("./routes/about");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/about", aboutRouter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

// app.get("/api/users", (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: "Ali",
//       age: 30,
//       job: "Computer Engineer",
//     },
//     {
//       id: 2,
//       name: "Sara",
//       age: 25,
//       job: "Graphic Designer",
//     },
//     {
//       id: 3,
//       name: "Reza",
//       age: 35,
//       job: "Project Manager",
//     },
//   ]);
// });

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
