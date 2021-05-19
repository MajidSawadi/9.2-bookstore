const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./api/index');

require("dotenv").config();
const cors = require("cors");

const app = express();

const booksRouter = require("./routes/books");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/test", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`MongoDB database connection established successfully!`);
  })
  .catch((err) => console.error("Could not connect to database!", err));
const db = mongoose.connection;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/api', indexRouter);
app.use("/books", booksRouter);



module.exports = app;