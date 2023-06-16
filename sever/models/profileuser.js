'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProfileUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProfileUser.belongsTo(models.User, {foreignKey: 'userId' })
    }
  }
  ProfileUser.init({
    location: DataTypes.STRING,
    title: DataTypes.TEXT("long"),
    aboutme: DataTypes.TEXT("long"),
    websiteLink: DataTypes.STRING,
    twitterLink: DataTypes.STRING,
    githubLink: DataTypes.STRING,
    point: DataTypes.INTEGER,
    userId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ProfileUser',
  });
  return ProfileUser;
};