const express = require('express');
const followController = require('../controller/follow');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.post('/getfollow', followController.getFollowQuestion);
route.post('/unfollow', followController.unFollow);
route.post('/moveListFollow', followController.moveListFollow);
route.post('/getfollowanswer', followController.getFollowAnswer);
route.post('/postfollowanswer', followController.postFollowAnswer);
route.post('/getFollowQuestionForUser', followController.getFollowQuestionForUser);
route.post('/', followController.postFollowQuestion);



module.exports = route;