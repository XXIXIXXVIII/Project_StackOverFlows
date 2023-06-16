const express = require('express');
const tagsController = require('../controller/tags');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.get('/', tagsController.getTagsCard);
route.post('/', tagsController.createTagQuestion);
route.get('/users/:userId', tagsController.getAllUserFollowTag);
route.get('/tagged/:tagName', tagsController.getTagdetail);
route.post('/userfollow', tagsController.createUserFollowTag);
route.post('/getuserfollow', tagsController.getUserFollowTag);

module.exports = route;