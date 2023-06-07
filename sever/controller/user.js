const db = require("../models/index");

const getUserDetail = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await db.User.findOne({
      where: { id: id },
      include: [{ model: db.ProfileUser }],
      // raw: true,
      nest: true,
    });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json("user not found");
  } catch (error) {
    return res.status(404).json(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    let allUser = await db.User.findAll({
      attributes: ["id","username", "avatar"],
      include: [
        { model: db.ProfileUser, attributes: ["id","andress", "point"] },
        { model: db.Tags, attributes: ["nameTag"],through: { attributes: [] },}
      ],
      // raw: true,
      nest: true,
    });
    return res.status(200).json(allUser);
  } catch (error) {
    console.log("allUser");
    console.log(error);
    return res.status(404).json(error);
  }
};

module.exports = {
  getUserDetail,
  getAllUsers,
};
