const db = require("../models");

const getAllQuestions = async (req, res) => {
  const { sortBy } = req.query;
  console.log(sortBy);
  let order = [];
  if (!sortBy) {
    order = [["createdAt", "DESC"]];
  }
  if (sortBy === "like") {
    order = [["like", "DESC"]];
  }
  if (sortBy === "Unanswered") {
    order = [
      ["tick", "ASC"],
      ["createdAt", "DESC"],
    ];
  }
  try {
    const totalQuestions = await db.Questions.count();
    const dataAllQuestions = await db.Questions.findAll({
      include: [
        { model: db.User, attributes: ["username", "avatar"] },
        {
          model: db.Tags,
          attributes: ["id", "nameTag"],
          through: { attributes: [] },
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
    console.log(id);
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
          include: {
            model: db.User,
            attributes: ["id", "username", "createdAt"],
          },
        },
        { model: db.Answers },
      ],
    });
    return res.json(question);
  } catch (error) {
    console.log(error);
  }
};

const upLikeQuestion = async (req, res) => {
  const { questionId } = req.body;
  try {
    const question = await db.Questions.findOne({ where: { id: questionId } });
    if (!question) {
      return res.status(400).json("question not found");
    }
    let newLike =  question.like+1
    question.set({like:newLike})
    await question.save();
    return res.status(200).json(question);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
  
};

const downLikeQuestion = async(req,res )=>{
  const { questionId } = req.body;
  try {
    const question = await db.Questions.findOne({ where: { id: questionId } });
    if (!question) {
      return res.status(400).json("question not found");
    }
    let newLike =  question.like-1
    question.set({like:newLike})
    await question.save();
    return res.status(200).json(question);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
  
}

module.exports = {
  getAllQuestions,
  createQuestion,
  getQuestionDetail,
  upLikeQuestion,
  downLikeQuestion
};
