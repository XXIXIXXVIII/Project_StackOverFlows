const express = require('express');
const tagsController = require('../controller/tags');
const middleWareJwtController = require('../middleWare/jwt');

const route = express.Router();

route.get('/', tagsController.getTagsCard);
route.post('/', tagsController.createTagQuestion);

module.exports = route;