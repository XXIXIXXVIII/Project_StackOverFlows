const express = require('express');
const followController = require('../controller/follow');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.post('/getfollow', followController.getFollowQuestion);
route.post('/', followController.postFollowQuestion);
route.post('/getfollowanswer', followController.getFollowAnswer);
route.post('/postfollowanswer', followController.postFollowAnswer);



module.exports = route;