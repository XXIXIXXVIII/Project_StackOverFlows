const express = require('express');
const badgesrController = require('../controller/badges');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.get('/:userId', badgesrController.getBadgesDetail);


module.exports = route;

