const express = require('express');
const userController = require('../controller/user');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.get('/:id', userController.getUserDetail);
route.get('/', userController.getAllUsers);

module.exports = route;