const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
require("dotenv").config();

const passportConfig = require("./passport");

const userAPIRouter = require("./routes/api/user");
const theatersAPIRouter = require("./routes/api/theaters");
const moviesAPIRouter = require("./routes/api/movies");
const reserAPIRouter = require('./routes/api/reservation');
const adminAPIRouter = require('./routes/api/admin');

const app = express();

passportConfig();
app.set("port", process.env.PORT || 8008);

app.use(
  cors({
    origin: true,
    credentials: true
  })
);
app.use(morgan("dev"));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/user', userAPIRouter);
app.use('/api/theaters', theatersAPIRouter);
app.use('/api/reservation', reserAPIRouter);
app.use('/api/movies', moviesAPIRouter);
app.use('/api/admin', adminAPIRouter);
app.use('/', (req, res) => {
    res.send('api 서버');
  });
// app.use('/', express.static(path.join(__dirname, '../front/build')));

app.listen(app.get("port"), () => {
  console.log("server start at: ", app.get("port"));
});
