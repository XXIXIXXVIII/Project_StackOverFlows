const express = require("express");

const useRoute = require('./user');
const authRoute = require('./auth');
const tagsRoute = require('./tags');
const questionsRoute = require('./questions');
const commentRoute = require('./comment');
const answerstRoute = require('./answers');
const followRoute = require('./follow');
const badgesRoute = require('./badges');

const route = express.Router();

route.use("/user",useRoute)
route.use("/auth",authRoute)
route.use("/tags",tagsRoute)
route.use("/questions",questionsRoute)
route.use("/comment",commentRoute)
route.use("/answers",answerstRoute)
route.use("/follow",followRoute)
route.use("/badges",badgesRoute)


module.exports = route;