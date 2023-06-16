const { Op } = require("sequelize");
const db = require("../models");

const getTagsCard = async (req, res) => {
  let q = req.query.q
  if(!q){q=''}

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dataTagsCard = await db.Tags.findAll({
      where:{nameTag:{[Op.like]:`%${q}%`}},
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
    console.log(error);
  }
};

const getTagdetail = async (req, res) => {
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
    console.log(req.params);
    const totalQuestions = await db.QuestionsTags.count({
      where: { tagId: tag.id },
    });
    return res.status(200).json({ tag, totalQuestions });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const createUserFollowTag = async (req, res) => {
  console.log(req.body);
  try {
    const { userId, tagId } = req.body;
    const check = await db.UserFollowTag.findOne({
      where: { userId: userId, tagId: tagId },
    });
    if (check) {
      const result = await db.UserFollowTag.destroy({
        where: { userId: userId, tagId: tagId },
      });
      return res.status(200).json("unfollow success");
    } else {
      const result = await db.UserFollowTag.create({
        userId: userId,
        tagId: tagId,
      });
      return res.status(200).json("follow success");
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const getUserFollowTag = async (req, res) => {
  console.log(req.body);
  try {
    const { userId, tagId } = req.body;
    const check = await db.UserFollowTag.findOne({
      where: { userId: userId, tagId: tagId },
    });
    if (check) {
      return res.status(200).json(true);
    } else {
      return res.status(200).json(false);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json("something wrong");
  }
};

const getAllUserFollowTag = async (req, res) => {
  const { userId } = req.params;

  try {
    const userTag = await db.UserFollowTag.findAll({
      where: { userId },
      attributes: ["userId", "tagId"],
      include: [
        { model: db.Tags,as:'tag', include:{model:db.Questions, where:{userId}, attributes:['id']} }
      ],
    });

    
    const userQuestion = await db.Questions.count({
      where: { userId },
    });
    const userTagQuestion = userTag?.map(item=>item?.Tag?.Questions?.length/userQuestion*100)


    const a = await db.Questions.findAll({where:{userId}, include:{model: db.Tags}})


     console.log(userTagQuestion);
    return res.status(200).json( userTag );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTagsCard,
  createTagQuestion,
  getTagdetail,
  createUserFollowTag,
  getUserFollowTag,
  getAllUserFollowTag,
};
