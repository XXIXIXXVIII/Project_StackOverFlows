"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    static associate(models) {
      Questions.belongsToMany(models.Tags, {
        through: "QuestionsTags",
        foreignKey: "questionId", 
        otherKey: "tagId", 
      });
      Questions.belongsTo(models.User, {foreignKey: "userId"})
      Questions.hasMany(models.Answers);
      Questions.hasMany(models.commentQuestion);
      Questions.hasMany(models.BadgesProgessQuestion);
      Questions.belongsToMany(models.User, {
        through: "UserActionQuestions",
        foreignKey: "questionId",
        otherKey: "userId",
      });
    }
  }
  Questions.init(
    {
      title: DataTypes.TEXT("long"),
      content: DataTypes.TEXT("long"),
      view: DataTypes.INTEGER,
      tick: DataTypes.BOOLEAN,
      like: DataTypes.INTEGER,
      totalAnswers: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Questions",
    }
  );
  return Questions;
};
