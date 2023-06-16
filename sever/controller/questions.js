const { Op } = require("sequelize");
const db = require("../models");

const getAllQuestions = async (req, res) => {
  let { sortBy, currentPage, perPage} = req.query;
  if(!perPage){perPage=15}
  offset = (parseInt(currentPage) - 1 || 1 - 1) * perPage;
  let q =req.query.q
  if(!q){q=""}


  let order = [];
  if (!sortBy) {
    order = [["createdAt", "DESC"]];
  }
  if (sortBy === "like") {
    order = [["like", "DESC"]];
  }
  if (sortBy === "Unanswered") {
    order = [
      ["totalAnswers", "ASC"],
      ["createdAt", "DESC"],
    ];
  }
  if (sortBy === "view") {
    order = [
      ["view", "DESC"],
      ["createdAt", "DESC"],
    ];
  }


  let search={}
  const keySearch = q?.split(':')[0]
  const valueSearch = q?.split(':')[1]
  if(keySearch==="[user]"){
    search = {"$User.username$": { [Op.like]: `%${valueSearch}%` }}
  }
  else if(keySearch==="[tag]"){
    search = {"$Tags.nameTag$":{[Op.like]:`%${valueSearch}%`}}
  }else{
    search = {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    }
  }


  try {
    const totalQuestions = await db.Questions.count();
    const dataAllQuestions = await db.Questions.findAll({
      where: search,
      limit: parseInt(perPage),
      offset: parseInt(offset),
      subQuery: false,
      include: [
        { model: db.User, attributes: ["username", "avatar"] },
        {
          model: db.Tags,
          attributes: ["id", "nameTag"],
          through: { attributes: [] },
          include:{model: db.UserFollowTag, as: 'userTag'}
        },
      ],
      attributes: {
        include: [
          [
            db.Sequelize.literal(
              "(SELECT COUNT(*) FROM `answers` WHERE `answers`.`questionId` = `Questions`.`id`)"
            ),
            "totalAnswers",
          ],
        ],
      },
      nest: true,
      order,
    });
    return res.status(200).json({ dataAllQuestions, totalQuestions });
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
};

const countAllQuestion = async (req, res) => {
  try {
    const count = await db.Questions.count();
    return res.status(200).json(count);
  } catch (error) {
    console.log(error);
  }
};

const createQuestion = async (req, res) => {
  try {
    const { userId, valueTitle, valueContent } = req.body;
    if (userId && valueTitle && valueContent) {
      const newQuestion = await db.Questions.create({
        userId,
        title: valueTitle,
        content: valueContent,
      });
      return res.status(201).json(newQuestion);
    }
    return res.status(404).json("something wrong");
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getQuestionDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await db.Questions.findOne({
      where: { id: id },
      include: [
        {
          model: db.User,
          attributes: ["id", "username", "avatar", "displayName"],
          include: { model: db.ProfileUser, attributes: ["id", "point"] },
        },
        {
          model: db.Tags,
          attributes: ["id", "nameTag"],
          through: { attributes: [] },
        },
        {
          model: db.commentQuestion,
          limit: 3,
          include: {
            model: db.User,
            attributes: ["id", "username", "createdAt"],
          },
        },
        { model: db.Answers },
      ],
    });
    question.view += 1;
    question.save();

    return res.json(question);
  } catch (error) {
    console.log(error);
    return res.status(400).json("something wrong");
  }
};

const upLikeQuestion = async (req, res) => {
  const { questionId, userId } = req.body;
  try {
    const question = await db.Questions.findOne({
      where: { id: questionId },
      include: {
        model: db.User,
        attributes: ["id", "username"],
        include: { model: db.ProfileUser, attributes: ["id", "point"] },
      },
      nest: true,
    });

    if (!question) {
      return res.status(400).json("question not found");
    }

    const ckeckUpLike = await db.UserActionQuestion.findOne({
      where: { userId: userId, questionId: question.id, actionName: "uplike" },
    });
    const ckeckDownLike = await db.UserActionQuestion.findOne({
      where: {
        userId: userId,
        questionId: question.id,
        actionName: "downlike",
      },
    });

    if (!ckeckUpLike && !ckeckDownLike) {
      let newLike = question.like + 1;
      let newpoint = question.User.ProfileUsers[0].point + 10;
      question.like = newLike;
      question.User.ProfileUsers[0].point = newpoint;
      await db.UserActionQuestion.create({
        userId: userId,
        questionId: question.id,
        actionName: "uplike",
      });
      await question.User.ProfileUsers[0].save();
      await question.save();

      res.status(200);
    } else if (!ckeckUpLike && ckeckDownLike) {
      let newLike = question.like + 2;
      let newpoint = question.User.ProfileUsers[0].point + 20;
      question.like = newLike;
      question.User.ProfileUsers[0].point = newpoint;
      await db.UserActionQuestion.create({
        userId: userId,
        questionId: question.id,
        actionName: "uplike",
      });
      await question.User.ProfileUsers[0].save();
      await question.save();

      await db.UserActionQuestion.destroy({
        where: {
          userId: userId,
          questionId: question.id,
          actionName: "downlike",
        },
      });
      res.status(200);
    } else {
      let newLike = question.like - 1;
      let newpoint = question.User.ProfileUsers[0].point - 10;
      question.like = newLike;
      question.User.ProfileUsers[0].point = newpoint;
      await question.User.ProfileUsers[0].save();
      await question.save();

      await db.UserActionQuestion.destroy({
        where: {
          userId: userId,
          questionId: question.id,
          actionName: "uplike",
        },
      });
      res.status(200);
    }

    const userBadgesProgess = await db.BadgesProgessQuestion.findOne({
      where: { userId: question.User.id, questionId: question.id },
    });

    if (!userBadgesProgess) {
      console.log(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        question.id,
        question.like
      );
      await db.BadgesProgessQuestion.create({
        userId: question.User.id,
        questionId: question.id,
        badgesName: "likeQuestion",
        progess: question.like,
        badgesQuestionId: 1,
        complete: 0,
      });
      return;
    }

    if (question.like === 300) {
      await db.BadgesProgessQuestion.create({
        userId: question.User.id,
        questionId: question.id,
        badgesName: "likeQuestion",
        progess: question.like,
        badgesQuestionId: 3,
        complete: 1,
      });
    } else if (question.like === 200) {
      await db.BadgesProgessQuestion.create({
        userId: question.User.id,
        questionId: question.id,
        badgesName: "likeQuestion",
        progess: question.like,
        badgesQuestionId: 2,
        complete: 1,
      });
      await db.BadgesProgessQuestion.destroy({
        where: {
          userId: question.User.id,
          questionId: question.id,
          badgesName: "likeQuestion",
          badgesQuestionId: 3,
          complete: 1,
        },
      });
    } else if (question.like === 100) {
      userBadgesProgess.badgesQuestionId = 1;
      userBadgesProgess.complete = 1;
      await db.BadgesProgessQuestion.destroy({
        where: {
          userId: question.User.id,
          questionId: question.id,
          badgesName: "likeQuestion",
          badgesQuestionId: 2,
          complete: 1,
        },
      });
    } else {
      await db.BadgesProgessQuestion.destroy({
        where: {
          userId: question.User.id,
          questionId: question.id,
          badgesName: "likeQuestion",
          complete: 1,
        },
      });
      userBadgesProgess.badgesQuestionId = null;
      userBadgesProgess.complete = 0;
    }

    userBadgesProgess.progess = question.like;
    await userBadgesProgess.save();

    return res.status(200).json(userBadgesProgess);
  } catch (error) {
    // console.log(error);
    return res.status(400).json(error);
  }
};

const downLikeQuestion = async (req, res) => {
  const { questionId, userId } = req.body;
  try {
    const question = await db.Questions.findOne({
      where: { id: questionId },
      include: {
        model: db.User,
        attributes: ["id", "username"],
        include: { model: db.ProfileUser, attributes: ["id", "point"] },
      },
    });
    if (!question) {
      return res.status(400).json("question not found");
    }

    const ckeckUpLike = await db.UserActionQuestion.findOne({
      where: { userId: userId, questionId: question.id, actionName: "uplike" },
    });
    const ckeckDownLike = await db.UserActionQuestion.findOne({
      where: {
        userId: userId,
        questionId: question.id,
        actionName: "downlike",
      },
    });

    if (!ckeckUpLike && !ckeckDownLike) {
      let newLike = question.like - 1;
      let newpoint = question.User.ProfileUsers[0].point - 10;
      question.like = newLike;
      question.User.ProfileUsers[0].point = newpoint;
      await db.UserActionQuestion.create({
        userId: userId,
        questionId: question.id,
        actionName: "downlike",
      });
      await question.User.ProfileUsers[0].save();
      await question.save();

      res.status(200);
    } else if (ckeckUpLike && !ckeckDownLike) {
      let newLike = question.like - 2;
      let newpoint = question.User.ProfileUsers[0].point - 20;
      question.like = newLike;
      question.User.ProfileUsers[0].point = newpoint;
      await db.UserActionQuestion.create({
        userId: userId,
        questionId: question.id,
        actionName: "downlike",
      });
      await question.User.ProfileUsers[0].save();
      await question.save();

      await db.UserActionQuestion.destroy({
        where: {
          userId: userId,
          questionId: question.id,
          actionName: "uplike",
        },
      });
      res.status(200);
    } else {
      let newLike = question.like + 1;
      let newpoint = question.User.ProfileUsers[0].point + 10;
      question.like = newLike;
      question.User.ProfileUsers[0].point = newpoint;
      await question.User.ProfileUsers[0].save();
      await question.save();

      await db.UserActionQuestion.destroy({
        where: {
          userId: userId,
          questionId: question.id,
          actionName: "downlike",
        },
      });
      res.status(200);
    }

    const userBadgesProgess = await db.BadgesProgessQuestion.findOne({
      where: { userId: question.User.id, questionId: question.id },
    });

    if (!userBadgesProgess) {
      await db.BadgesProgessQuestion.create({
        userId: question.User.id,
        questionId: question.id,
        badgesName: "likeQuestion",
        progess: question.like,
        badgesQuestionId: 1,
        complete: 0,
      });
      return;
    }
    userBadgesProgess.progess = question.like;
    if (question.like === 300) {
    } else if (question.like === 200) {
      await db.BadgesProgessQuestion.destroy({
        where: {
          userId: question.User.id,
          questionId: question.id,
          badgesQuestionId: 3,
        },
      });
    } else if (question.like === 100) {
      await db.BadgesProgessQuestion.destroy({
        where: {
          userId: question.User.id,
          questionId: question.id,
          badgesQuestionId: 2,
        },
      });
      userBadgesProgess.badgesQuestionId = 1;
      userBadgesProgess.complete = 1;
    } else {
      userBadgesProgess.badgesQuestionId = 1;
      userBadgesProgess.complete = 0;
    }

    await userBadgesProgess.save();
    return userBadgesProgess;
  } catch (error) {
    // console.log(error);
    return res.status(400).json(error);
  }
};

const getUpLikeQuestion = async (req, res) => {
  console.log(req.body);
  try {
    const { questionId, userId } = req.body;
    const checkLike = await db.UserActionQuestion.findOne({
      where: { questionId: questionId, userId: userId, actionName: "uplike" },
    });
    if (checkLike) {
      return res.status(200).json("liked");
    } else {
      return res.status(200).json("haven't liked");
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json("something wrong");
  }
};

const getDownLikeQuestion = async (req, res) => {
  console.log("object");
  try {
    const { questionId, userId } = req.body;
    const checkLike = await db.UserActionQuestion.findOne({
      where: { questionId: questionId, userId: userId, actionName: "downlike" },
    });
    if (checkLike) {
      return res.status(200).json("downliked");
    } else {
      return res.status(200).json("haven't downliked");
    }
  } catch (error) {
    console.log(error);
    return res.status(200).json("something wrong");
  }
};

const getCountQuestionForUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const questions = await db.Questions.count({ where: { userId } });
    return res.status(200).json(questions);
  } catch (error) {
    console.log(error);
  }
};

const getAllQuestionForUser = async (req, res) => {
  const { userId } = req.params;
  const { postSort } = req.query;
  let order = [];
  if (postSort === "Newest") {
    order = [["createdAt", "DESC"]];
  }
  if (postSort === "Score") {
    order = [["like", "DESC"]];
  }
  try {
    const questions = await db.Questions.findAll({ where: { userId }, order });
    return res.status(200).json(questions);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionDetail,
  upLikeQuestion,
  downLikeQuestion,
  getUpLikeQuestion,
  getDownLikeQuestion,
  getCountQuestionForUser,
  getAllQuestionForUser,
  countAllQuestion,
};
