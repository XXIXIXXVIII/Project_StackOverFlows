const express = require('express');
const answerController = require('../controller/answer');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.get('/countanswerforuser/:userId', answerController.getCountAnswerForUser);
route.get('/getAllAnswersForUser/:userId', answerController.getAllAnswersForUser);
route.put('/uplike', answerController.upLikeAnswers);
route.get('/countForQuestion/:questionId', answerController.getCountAnswerForQuestion);
route.get('/:questionid', answerController.allAnswerForQuestion);
route.put('/downlike', answerController.downLikeAnswers);
route.post('/getuplike', answerController.getUpLikeAnswers);
route.post('/getdownlike', answerController.getDownLikeAnswers);
route.post('/',middleWareJwtController.verifyToken, answerController.createAnswer);


module.exports = route;