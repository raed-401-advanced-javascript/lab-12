'use strict';

require('dotenv').config();

const server = require('./src/server.js');

const mongoose = require('mongoose');


const option_detail = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, option_detail);
server.start(process.env.PORT);