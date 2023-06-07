'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Answers.belongsTo(models.Questions, {foreignKey: "questionId"})
      Answers.belongsTo(models.User, {foreignKey: "userId"})
      Answers.hasMany(models.commentAnswers)
    }
  }
  Answers.init({
    content: DataTypes.TEXT('long'),
    tick: DataTypes.BOOLEAN,
    like: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};