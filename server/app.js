var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config()

var app = express();

const routerStudent = require('./routes/student.route');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// mongoose.connect(config.DB,{ useNewUrlParser: true });

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB CONNECTED'))
.catch(err=>console.log(err.message))


app.use('/api', routerStudent)



module.exports = app;
