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
      User.hasMany(models.Save)
      User.hasOne(models.ProfileUser, {foreignKey: 'userId' }),
      User.belongsToMany(models.Tags, {through: "UserFollowTags", foreignKey: 'userId', otherKey: 'tagId'})
      User.belongsToMany(models.Questions, {through: "UserActionQuestions", foreignKey: 'userId', otherKey: 'questionId'})
      User.belongsToMany(models.Answers, {through: "UserActionAnswer", foreignKey: 'userId', otherKey: 'answerId'})
      User.belongsToMany(models.BadgesQuestion, {through: "BadgesProgessQuestion", foreignKey: 'userId', otherKey: 'badgesQuestionId'})
      User.belongsToMany(models.BadgesAnswer, {through: "BadgesProgessAnswer", foreignKey: 'userId', otherKey: 'badgesAnswerId'})
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    registerMethod: DataTypes.STRING,
    avatar: DataTypes.STRING,
    displayName: DataTypes.STRING,
    lastLogin: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

