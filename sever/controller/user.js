const { Op } = require("sequelize");
const db = require("../models/index");

const getUserDetail = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await db.User.findOne({
      where: { id: id },
      include: [
        { model: db.ProfileUser },
        {
          model: db.Tags,
          through: { attributes: [] },
          attributes: ["id", "nameTag"],
        },
      ],
      attributes: { exclude: ["password"] },
      // raw: true,
      nest: true,
    });
    if (user) {
      console.log(user);
      return res.status(200).json(user);
    }
    return res.status(404).json("user not found");
  } catch (error) {
    console.log(error);
    return res.status(404).json(error);
  }
};

const getAllUsers = async (req, res) => {
  const q = req.query.q || "";
  const page = req.query.page || 0;
  const limit = 36;
  const offset = limit * page;
  let softBy = req.query.sortBy;
  let order = [];

  if (softBy === "newuser") {
    order = [["id", "DESC"]];
  }

  if (softBy === "vote") {
    order = [[db.ProfileUser, "point", "DESC"]];
  }
  try {
    let allUser = await db.User.findAll({
      where: { username: { [Op.like]: `%${q}%` } },
      attributes: ["id", "username", "avatar"],
      include: [
        { model: db.ProfileUser },
        {
          model: db.Tags,
          attributes: ["id", "nameTag"],
          through: { attributes: [] },
        },
      ],
      limit,
      offset,
      order,
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

const upDateProfile = async (req, res) => {
  const updatedFields = JSON.parse(req.body.formdata);

  const avatar = req.file?.path.split("\\")[1];

  const { id } = req.params;
  try {
    const user = await db.User.findOne({ where: { id } });
    if (!user) {
      return res.status(400).json("user not found");
    }
    const profileUser = await db.ProfileUser.findOne({ where: { userId: id } });

    const check =
      updatedFields.aboutme === profileUser.aboutme &&
      updatedFields.githubLink === profileUser.githubLink &&
      updatedFields.location === profileUser.location &&
      updatedFields.title === profileUser.title &&
      updatedFields.twitterLink === profileUser.twitterLink &&
      updatedFields.websiteLink === profileUser.websiteLink;

    if (check && !avatar) {
      return res.status(400).json("no change value");
    }

    await db.ProfileUser.update(updatedFields, {
      where: { userId: id },
      returning: true,
      plain: true,
    });
    user.avatar = avatar;
    user.displayname = updatedFields.displayname;
    await user.save();
    return res.status(200).json("Update success");
  } catch (error) {
    console.log(error);
  }
};

const createSave = async (req, res) => {
  const { userId, valueNewList } = req.body;
  try {
    const check = await db.Save.findOne({ where: { userId, saveName:valueNewList } });
    console.log(check);
    if (check) {
      return res.status(400).json("List name already exists.");
    }
    await db.Save.create({ userId, saveName:valueNewList });
    return res.status(200).json("New list created.");
  } catch (error) {
    console.log(error);
  }
};

const getSaveAll = async (req, res) => {
  const { userId } = req.params;
  try {
    const save = await db.Save.findAll({
      where: { userId, saveName:{[Op.ne]:'forLate'} },
      attributes: ["saveName"],
    });
    return res.status(200).json(save);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUserDetail,
  getAllUsers,
  upDateProfile,
  createSave,
  getSaveAll,
};
