const db = require("../models");

const getBadgesDetail = async (req, res) => {
  const { userId } = req.params;
  try {
    const badgesQuestion = await db.BadgesProgessQuestion.findAll({
      where: { userId: userId, complete: 1 },
      include: { model: db.BadgesQuestion },
    });
    const badgesAnswer = await db.BadgesProgessAnswer.findAll({
      where: { userId: userId, complete: 1 },
      include: { model: db.BadgesAnswer },
    });

    if(badgesQuestion){
      return res.status(200).json([...badgesQuestion, ...badgesAnswer]);
    }else{
      return res.status(400).json('something Wrong')
    }
    
  } catch (error) {
    console.log(error);
    return res.status(400).json('something Wrong')
  }
};

module.exports = { getBadgesDetail };
