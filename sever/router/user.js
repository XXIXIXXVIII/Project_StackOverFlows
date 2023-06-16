const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const userController = require('../controller/user');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.post('/updateProfile/:id',upload.single('avatar'), userController.upDateProfile);
route.post('/createSave', userController.createSave);
route.get('/getSave/:userId', userController.getSaveAll);
route.get('/:id', userController.getUserDetail);
route.get('/', userController.getAllUsers);

module.exports = route;