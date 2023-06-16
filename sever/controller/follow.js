const db = require("../models");

const getFollowQuestion = async (req, res) => {
  const { userId, questionId } = req.body;
  const check = await db.UserActionQuestion.findOne({
    where: { userId: userId, questionId: +questionId, actionName: "follow" },
  });

  if (check) {
    return res.status(200).json("have");
  } else {
    return res.status(200).json("notfound");
  }
};

const postFollowQuestion = async (req, res) => {
  try {
    const { userId, questionId } = req.body;
    const check = await db.UserActionQuestion.findOne({
      where: { userId: userId, questionId: +questionId, actionName: "follow" },
    });
    if (!check) {
      const save = await db.Save.findOne({
        where: { userId, saveName: "For later" },
      });
      if (!save) {
        const newSave = await db.Save.create({ userId, saveName: "For later" });
        const result = await db.UserActionQuestion.create({
          userId: userId,
          questionId: +questionId,
          actionName: "follow",
          saveId: newSave.id,
        });
      } else {
        const result = await db.UserActionQuestion.create({
          userId: userId,
          questionId: +questionId,
          actionName: "follow",
          saveId: save.id,
        });
      }
      return res.status(200).json("Question removed from For later.");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getFollowAnswer = async (req, res) => {
  const { userId, questionId } = req.body;
  const check = await db.UserActionQuestion.findOne({
    where: { userId: userId, questionId: +questionId, actionName: "follow" },
  });
  if (check) {
    return res.status(200).json("have");
  } else {
    return res.status(200).json("notfound");
  }
};

const postFollowAnswer = async (req, res) => {
  try {
    const { userId, questionId } = req.body;
    const check = await db.UserActionQuestion.findOne({
      where: { userId: userId, questionId: +questionId, actionName: "follow" },
    });
    if (!check) {
      const save = await db.Save.findOne({
        where: { userId, saveName: "For later" },
      });
      if (!save) {
        const newSave = await db.Save.create({ userId, saveName: "For later" });
        const result = await db.UserActionQuestion.create({
          userId: userId,
          questionId: +questionId,
          actionName: "follow",
          saveId: newSave.id,
        });
      } else {
        const result = await db.UserActionQuestion.create({
          userId: userId,
          questionId: +questionId,
          actionName: "follow",
          saveId: save.id,
        });
      }

      return res.status(200).json("Question saved to For later.");
    } else {
      const result = await db.UserFollowQuestion.destroy({
        where: {
          userId: userId,
          questionId: +questionId,
          actionName: "follow",
        },
      });
      return res.status(200).json("Question removed from saves.");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getFollowQuestionForUser = async (req, res) => {
  const { userId, saveName } = req.body;

  try {
    let whereCondition = {};
    if (saveName !== "All saves") {
      whereCondition = { userId:userId, saveName:saveName };
    } else {
      whereCondition = { userId: userId };
    }

    const save = await db.Save.findAll({ where: whereCondition });
    const saveIds = save.map(item=>item.id)

    const question = await db.UserActionQuestion.findAll({
      where: {saveId: saveIds},
      include:[{model:db.User, attributes: { exclude: ['password'] }}, {model: db.Questions, include:[{model:db.Tags},{model:db.User} ,{model:db.Answers}]}, ]
    });
    if(!question){return res.status(400).json('question not fount')}
    return res.status(200).json(question);
  } catch (error) {
    console.log(error);
  }
};

const unFollow = async (req, res) => {
  const { saveId, userId, questionId } = req.body;
  try {
    await db.UserActionQuestion.destroy({
      where: { userId, saveId, actionName: "follow",questionId },
    });
    return res.status(200).json("Unsave successful");
  } catch (error) {
    console.log(error);
  }
};

const moveListFollow = async (req, res) => {
  const { saveId, userId, pickMovieList } = req.body;
  try {
    const userAction = await db.UserActionQuestion.findOne({
      where: { userId, saveId, actionName: "follow" },
    });

    if (!userAction) {
      return res.status(400).json("something wrong");
    }
    const newSave = await db.Save.findOne({
      where: { saveName: pickMovieList },
    });
    if (!newSave) {
      return res.status(400).json("List Save not found");
    }
    userAction.saveId = newSave.id;
    userAction.save();
    return res.status(200).json("move success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getFollowQuestion,
  postFollowQuestion,
  postFollowAnswer,
  getFollowAnswer,
  getFollowQuestionForUser,
  unFollow,
  moveListFollow,
};
