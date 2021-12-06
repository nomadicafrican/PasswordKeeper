// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['user_id'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/login");
// const widgetsRoutes = require("./routes/widgets");
const homePage = require("./routes/login");
const loginPage = require('./routes/reallogin');
const GetUserAndPassRoutes = require("./routes/getUserAndPass");
const editPage = require('./routes/edit_password');
// const deletePage = require('./routes/delete_password')
// const welcomePage = require('./routes/homepage');
const addpage = require('./routes/add');
const expressLayouts = require('express-ejs-layouts');
const generatePassword = require('./routes/password_generator')
// const nst indexRouter = require('./routes/inde x');
// console.log(addpage(db))
app.use(expressLayouts);
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use('/homepage', welcomePage(db));
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
app.use("/password", GetUserAndPassRoutes(db));
app.use("/register", homePage(db));
app.use('/login', loginPage(db));
app.use('/edit', editPage(db));
app.use('/add', addpage(db));
app.use('/generate' , generatePassword(db));
// app.use('/delete', deletePage(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// app.get("/", (req, res) => {
//   res.render("index");
// });
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

