// index.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const db = require("./config/mongoDBCoenact");
const path = require("path");

const userRouter = require("./routes/userRoute");
const newsRouter = require("./routes/newsRoute");
const getHome = require("./routes/getHome");

const app = express();

// Middleware
const Middleware = [];

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

db;

// Session middleware setup
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// allRouter call
const allRouter = [userRouter, newsRouter, getHome];

app.use("/", allRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// 404 Not Found middleware
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
