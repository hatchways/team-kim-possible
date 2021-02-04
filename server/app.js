const createError = require("http-errors");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => console.error(err));

const indexRouter = require("./routes/index");
const tripsRouter = require("./routes/trips");
const apiRouter = require("./routes/api");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const placesRouter = require("./routes/places");
const quotesRouter = require("./routes/quotes");
const favoritesRouter = require("./routes/favorites");
const profileRouter = require("./routes/profile");
const carRentalRouter = require("./routes/car-rental");
const hotelRouter = require("./routes/hotel");
const flightRouter = require("./routes/flight");
const stripeRouter = require("./routes/stripe");
const shoppingCartRouter = require("./routes/shopping-cart");
const exploreRouter = require("./routes/explore");
const auth = require("./middleware/auth");

const { json, urlencoded } = express;

var app = express();
app.use(express.json());

app.use(cors());
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/search-places", placesRouter);
app.use("/quotes", quotesRouter);
app.use("/carRental", carRentalRouter);
app.use("/hotels", hotelRouter);
app.use("/flights", flightRouter);
app.use("/favorites", auth, favoritesRouter);
app.use("/profile", auth, profileRouter);
app.use("/stripe", stripeRouter);
app.use("/shopping-cart", shoppingCartRouter);
app.use("/explore", exploreRouter);
app.use("/save-stripe-token", stripeRouter);
app.use("/trips", tripsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});

module.exports = app;
