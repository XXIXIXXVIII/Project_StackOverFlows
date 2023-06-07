'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.ProfileUser)
      User.hasMany(models.Questions)
      User.hasMany(models.Answers)
      User.hasMany(models.commentAnswers)
      User.hasMany(models.commentQuestion)
      User.hasOne(models.ProfileUser, {foreignKey: 'userId' }),
      User.belongsToMany(models.Tags, {through: "UserFollowTags", foreignKey: 'userId', otherKey: 'tagId'})
      User.belongsToMany(models.Questions, {through: "`userfollowquestions`", foreignKey: 'userId', otherKey: 'questionId'})
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    registerMethod: DataTypes.STRING,
    avatar: DataTypes.STRING,
    displayName: DataTypes.STRING,
    metalQuestion: DataTypes.STRING,
    metalAnswer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

