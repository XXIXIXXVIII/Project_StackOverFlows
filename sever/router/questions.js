const express = require('express');
const questionsController = require('../controller/questions');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.post('/uplike', questionsController.upLikeQuestion);
route.post('/downlike', questionsController.downLikeQuestion);
route.get('/:id', questionsController.getQuestionDetail);
route.get('/', questionsController.getAllQuestions);
route.post('/', questionsController.createQuestion);

module.exports = route;