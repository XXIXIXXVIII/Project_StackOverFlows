const express = require('express');
const commentController = require('../controller/comment');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.post('/', commentController.createCmtQuestion);
route.post('/answer', commentController.createCmtAnswer);
route.get('/:idAnswer', commentController.getCommentForAnswer);


module.exports = route;