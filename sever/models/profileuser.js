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
    title: DataTypes.STRING,
    aboutme: DataTypes.STRING,
    websiteLink: DataTypes.STRING,
    fbLink: DataTypes.STRING,
    githubLink: DataTypes.STRING,
    point: DataTypes.INTEGER,
    andress: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProfileUser',
  });
  return ProfileUser;
};