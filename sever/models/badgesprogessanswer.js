'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BadgesProgessAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BadgesProgessAnswer.belongsTo(models.Answers, {foreignKey: "answerId"})
      BadgesProgessAnswer.belongsTo(models.BadgesAnswer, {foreignKey: 'badgesAnswerId' })
    }
  }
  BadgesProgessAnswer.init({
    userId: DataTypes.INTEGER,
    badgesAnswerId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER,
    badgesName: DataTypes.STRING,
    progess: DataTypes.INTEGER,
    complete: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'BadgesProgessAnswer',
  });
  return BadgesProgessAnswer;
};