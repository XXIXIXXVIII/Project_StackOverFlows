const db = require("../models");

const getTagsCard = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dataTagsCard = await db.Tags.findAll({
      include: [
        { model: db.Questions, through: { attributes: [] }, attributes: [] },
      ],
      attributes: [
        "id",
        "nameTag",
        "title",
        [
          db.Sequelize.fn("COUNT", db.Sequelize.col("Questions.id")),
          "questionCount",
        ],
        [
          db.Sequelize.literal(`
      SUM(CASE WHEN DATE(Questions.createdAt) = CURDATE() THEN 1 ELSE 0 END)
    `),
          "questionCountToDay",
        ],
        [
          db.Sequelize.literal(`
      SUM(CASE WHEN DATE(Questions.createdAt) >= CURDATE()- INTERVAL 6 DAY THEN 1 ELSE 0 END)
    `),
          "questionCountWeek",
        ],
      ],
      group: ["Tags.id"],
      nest: true,
    });
    console.log("object", dataTagsCard);
    return res.json(dataTagsCard);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const createTagQuestion = async (req, res) => {
  console.log("object");
  const { tags, questionId } = req.body;
  try {
    const result = await Promise.all(
      tags.map(async (tag) => {
        const check = await db.Tags.findOne({ where: { nameTag: tag } });
        if (check) {
          await db.QuestionsTags.create({
            tagId: check.id,
            questionId: questionId,
          });
          return;
        } else {
          try {
            const newTag = await db.Tags.create({ nameTag: tag });
            const newTagQuestion = await db.QuestionsTags.create({
              tagId: newTag.id,
              questionId: questionId,
            });
            return res.status(200).json("success created new tag");
          } catch (error) {
            return res.status(404).json({ message: error.message });
          }
        }
      })
    );
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getTagdetail = async (req, res) => {
  console.log("object");
  console.log(req.params);
  try {
    const { tagName } = req.params;
    const tag = await db.Tags.findOne({
      where: { nameTag: tagName },
      include: [
        {
          model: db.Questions,
          attributes: [
            "id",
            "title",
            "content",
            "view",
            "like",
            "createdAt",
            [
              db.Sequelize.literal(
                "(SELECT COUNT(*) FROM `answers` WHERE `answers`.`questionId` = `Questions`.`id`)"
              ),
              "totalAnswers",
            ],
          ],
          include: [
            { model: db.User, attributes: ["id", "username", "avatar"] },
            { model: db.Tags, attributes: ["id", "nameTag"] },
          ],
        },
      ],
    });
    const totalQuestions = await db.QuestionsTags.count({where:{tagId:tag.id}})
    return res.status(200).json({tag, totalQuestions});
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = { getTagsCard, createTagQuestion, getTagdetail };
