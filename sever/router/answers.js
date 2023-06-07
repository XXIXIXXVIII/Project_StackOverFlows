const express = require('express');
const answerController = require('../controller/answer');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.post('/',middleWareJwtController.verifyToken, answerController.createAnswer);
route.get('/:questionid', answerController.allAnswerForQuestion);


module.exports = route;