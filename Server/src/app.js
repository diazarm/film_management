const express = require('express');
const cors = require ('cors');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter.js');
//const jwt = require('jsonwebtoken')
const keys = require('../src/../settings/keys.js')



const app = express();
app.set('key', keys.key) //hacemos referencia a key que esta en settings

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(mainRouter);


module.exports = {app , key: keys.key};






