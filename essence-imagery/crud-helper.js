// Connect to the database
require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const package = require('./models/package');
const Order = require('./models/order');

let user, package, order;
let users, packages, orders;