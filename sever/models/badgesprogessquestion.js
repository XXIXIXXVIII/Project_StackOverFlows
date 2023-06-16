'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BadgesProgessQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BadgesProgessQuestion.belongsTo(models.Questions, {foreignKey: "questionId"})
      BadgesProgessQuestion.belongsTo(models.BadgesQuestion, {foreignKey: 'badgesQuestionId' })
    }
  }
  BadgesProgessQuestion.init({
    userId: DataTypes.INTEGER,
    badgesQuestionId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    progess: DataTypes.INTEGER,
    badgesName: DataTypes.STRING,
    complete: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BadgesProgessQuestion',
  });
  return BadgesProgessQuestion;
};