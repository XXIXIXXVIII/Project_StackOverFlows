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
  console.log("object");
  const { questionid } = req.params;
  try {
    const answers = await db.Answers.findAll({
      where: { questionId: questionid },
      limit: 2,
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

const upLike =async (req,res)=>{

}

module.exports = { createAnswer, allAnswerForQuestion,upLike };
