const db = require("../models");

const createAnswer = async (req, res) => {
  const { user, valueAsk, questionId } = req.body;
  if (valueAsk.trim().split("").length > 1) {
    try {
      const result = await db.Answers.create({
        content: valueAsk,
        userId: user,
        questionId: +questionId,
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
};

const allAnswerForQuestion = async (req, res) => {
  const { questionid } = req.params;
  try {
    const answers = await db.Answers.findAll({
      where: { questionId: questionid },
      limit: 2,
      subQuery: false,
      include: [
        {
          model: db.User,
          attributes: ["id", "username", "avatar"],
          include: [{ model: db.ProfileUser, attributes: ["point"] }],
        },
        {
          model: db.commentAnswers,
          attributes: ["content", "createdAt"],
          include: { model: db.User, attributes: ["id", "username"] },
        },
      ],
    });
    return res.status(200).json(answers);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getCountAnswerForUser = async (req, res) => {
  const { userId } = req.params;
  console.log(userId);
  try {
    const answer = await db.Answers.count({ where: { userId } });
    return res.status(200).json(answer);
  } catch (error) {
    console.log(error);
  }
};

const getCountAnswerForQuestion = async (req,res)=>{
  const { questionId } = req.params;
  try {
    const countAnswer = await db.Answers.count({where:{questionId}})
    return res.status(200).json(countAnswer)
  } catch (error) {
    console.log(error);
  }
}

const getAllAnswersForUser = async (req, res) => {
  console.log("object");
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
    const answers = await db.Answers.findAll({ where: { userId }, order });
    return res.status(200).json(answers);
  } catch (error) {
    console.log(error);
  }
};

const upLikeAnswers = async (req, res) => {
  const {askId, userId} =req.body
  console.log("aaaaaaaaaaaaaaaaaobject");
  try {
    const answer = await db.Answers.findOne({
      where: { id: askId },
      include: {
        model: db.User,
        attributes: ["id"],
        include: { model: db.ProfileUser, attributes: ["id", "point"] },
      },
    });
   
    if (!answer) {
      return res.status(404).json("something wrong");
    }

    const checkUpLike = await db.UserActionAnswer.findOne({
      where: { userId, answerId: askId, actionName: "uplike" },
    });
    if (!checkUpLike) {
      await db.UserActionAnswer.create({
        userId,
        answerId: askId,
        actionName: "uplike",
      });
    } else {
      await db.UserActionAnswer.destroy({
        where: { userId, answerId: askId, actionName: "uplike" },
      });
    }

    const checkDownLike = await db.UserActionAnswer.findOne({
      where: { userId, answerId: askId, actionName: "downlike" },
    });
    
    if (!checkUpLike && !checkDownLike) {
      answer.like++;
      answer.User.ProfileUsers[0].point += 5;
      await answer.User.ProfileUsers[0].save();
      await answer.save();
    } else if (!checkUpLike && checkDownLike) {
      answer.like += 2;
      answer.User.ProfileUsers[0].point += 10;
      await db.UserActionAnswer.destroy({
        where: { userId, answerId: askId, actionName: "downlike" },
      });
      await answer.User.ProfileUsers[0].save();
      await answer.save();
    } else {
      answer.like--;
      answer.User.ProfileUsers[0].point -= 5;
      await answer.User.ProfileUsers[0].save();
      await answer.save();
    }

    const userBadgesProgess = await db.BadgesProgessAnswer.findOne({
      where: { userId: answer.User.id, answerId: answer.id },
    });
    if (!userBadgesProgess) {
      await db.BadgesProgessAnswer.create({
        userId: answer.User.id,
        answerId: answer.id,
        badgesName: "likeAnswers",
        progess: answer.like,
        badgesAnswerId: 1,
        complete: 0,
      });
      return res.status(200).json("a");
    }

    if (answer.like === 150) {
      await db.BadgesProgessAnswer.create({
        userId: answer.User.id,
        answerId: answer.id,
        badgesName: "likeAnswers",
        progess: answer.like,
        badgesAnswerId: 3,
        complete: 1,
      });
    } else if (answer.like === 100) {
      await db.BadgesProgessAnswer.destroy({
        where: {
          userId: answer.User.id,
          answerId: answer.id,
          badgesName: "likeAnswers",
          badgesAnswerId: 3,
          complete: 1,
        },
      });

      await db.BadgesProgessAnswer.create({
        userId: answer.User.id,
        answerId: answer.id,
        badgesName: "likeAnswers",
        progess: answer.like,
        badgesAnswerId: 2,
        complete: 1,
      });
    } else if (answer.like === 50) {
      await db.BadgesProgessAnswer.destroy({
        where: {
          userId: answer.User.id,
          answerId: answer.id,
          badgesName: "likeAnswers",
          badgesAnswerId: 2,
          complete: 1,
        },
      });
      userBadgesProgess.badgesAnswerId = 1;
      userBadgesProgess.complete = 1;
    } else {
      await db.BadgesProgessAnswer.destroy({
        where: {
          userId: answer.User.id,
          answerId: answer.id,
          badgesName: "likeAnswers",
          complete: 1,
        },
      });
      
    }

    userBadgesProgess.progess = answer.like;
      await userBadgesProgess.save();
    return res.status(200).json(userBadgesProgess);
  } catch (error) {
    console.log(error);
  }
};

const downLikeAnswers = async (req, res) => {
  const { askId, userId } = req.body;

  try {
    const answer = await db.Answers.findOne({
      where: { id: askId },
      include: {
        model: db.User,
        attributes: ["id"],
        include: { model: db.ProfileUser, attributes: ["id", "point"] },
      },
    });
    if (!answer) {
      return res.status(404).json("something wrong");
    }

    const checkDownLike = await db.UserActionAnswer.findOne({
      where: { userId, answerId: askId, actionName: "downlike" },
    });
    if (!checkDownLike) {
      await db.UserActionAnswer.create({
        userId,
        answerId: askId,
        actionName: "downlike",
      });
    } else {
      console.log("object");
      await db.UserActionAnswer.destroy({
        where: { userId, answerId: askId, actionName: "downlike" },
      });
    }

    const checkUpLike = await db.UserActionAnswer.findOne({
      where: { userId, answerId: askId, actionName: "uplike" },
    });

    if (!checkUpLike && !checkDownLike) {
      answer.like--;
      answer.User.ProfileUsers[0].point -= 5;
      await answer.User.ProfileUsers[0].save();
      await answer.save();
    } else if (checkUpLike && !checkDownLike) {
      answer.like -= 2;
      answer.User.ProfileUsers[0].point -= 10;
      await db.UserActionAnswer.destroy({
        where: { userId, answerId: askId, actionName: "uplike" },
      });
      await answer.User.ProfileUsers[0].save();
      await answer.save();
    } else {
      answer.like++;
      answer.User.ProfileUsers[0].point += 5;
      await answer.User.ProfileUsers[0].save();
      await answer.save();
    }

    const userBadgesProgess = await db.BadgesProgessAnswer.findOne({
      where: { userId: answer.User.id, answerId: answer.id },
    });
    if (!userBadgesProgess) {
      await db.BadgesProgessAnswer.create({
        userId: answer.User.id,
        answerId: answer.id,
        badgesName: "likeAnswers",
        progess: answer.like,
        badgesAnswerId: 1,
        complete: 0,
      });
      return res.status(200).json("a");
    }

    if (answer.like === 150) {
      await db.BadgesProgessAnswer.create({
        userId: answer.User.id,
        answerId: answer.id,
        badgesName: "likeAnswers",
        progess: answer.like,
        badgesAnswerId: 3,
        complete: 1,
      });
    } else if (answer.like === 100) {
      await db.BadgesProgessAnswer.destroy({
        where: {
          userId: answer.User.id,
          answerId: answer.id,
          badgesName: "likeAnswers",
          badgesAnswerId: 3,
          complete: 1,
        },
      });

      await db.BadgesProgessAnswer.create({
        userId: answer.User.id,
        answerId: answer.id,
        badgesName: "likeAnswers",
        progess: answer.like,
        badgesAnswerId: 2,
        complete: 1,
      });
    } else if (answer.like === 50) {
      await db.BadgesProgessAnswer.destroy({
        where: {
          userId: answer.User.id,
          answerId: answer.id,
          badgesName: "likeAnswers",
          badgesAnswerId: 2,
          complete: 1,
        },
      });
      userBadgesProgess.badgesAnswerId = 1;
      userBadgesProgess.complete = 1;
    } else {
      await db.BadgesProgessAnswer.destroy({
        where: {
          userId: answer.User.id,
          answerId: answer.id,
          badgesName: "likeAnswers",
          complete: 1,
        },
      });
    }

    userBadgesProgess.progess = answer.like;
    await userBadgesProgess.save();

    return res.status(200).json(userBadgesProgess);
  } catch (error) {
    console.log(error);
  }
};

const getUpLikeAnswers = async (req, res) => {
  try {
    const { askId, userId } = req.body;
    const checkLike = await db.UserActionAnswer.findOne({
      where: { answerId: askId, userId: userId, actionName: "uplike" },
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

const getDownLikeAnswers = async (req,res)=>{
  try {
    const { askId, userId } = req.body;
    const checkLike = await db.UserActionAnswer.findOne({
      where: { answerId: askId, userId: userId, actionName: "downlike" },
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
}

module.exports = {
  createAnswer,
  allAnswerForQuestion,
  getCountAnswerForUser,
  getAllAnswersForUser,
  upLikeAnswers,
  downLikeAnswers,
  getUpLikeAnswers,
  getDownLikeAnswers,
  getCountAnswerForQuestion
};
