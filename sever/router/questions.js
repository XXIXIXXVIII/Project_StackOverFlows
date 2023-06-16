const express = require('express');
const questionsController = require('../controller/questions');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.post('/uplike', questionsController.upLikeQuestion);
route.get('/allCount/', questionsController.countAllQuestion);
route.post('/downlike', questionsController.downLikeQuestion);
route.post('/upgetlike', questionsController.getUpLikeQuestion);
route.post('/downgetlike', questionsController.getDownLikeQuestion);
route.get('/getQuestionForUser/:userId', questionsController.getCountQuestionForUser);
route.get('/getAllQuestionForUser/:userId', questionsController.getAllQuestionForUser);
route.get('/:id', questionsController.getQuestionDetail);
route.get('/', questionsController.getAllQuestions);
route.post('/', questionsController.createQuestion);

module.exports = route;