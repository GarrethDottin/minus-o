const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const httpStatus = require('http-status');

const app = express();

// Middleware
// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Parse cookies
app.use(cookieParser());
// Logger
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// mount all routes on / path
app.use('/', require('./modules/routes'));

// catch 404
app.use((req, res) => res.status(httpStatus.NOT_FOUND).send({ message: 'API not found' }));

module.exports = app;
