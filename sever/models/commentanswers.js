'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commentAnswers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      commentAnswers.belongsTo(models.Answers, {foreignKey: "answerId"})
      commentAnswers.belongsTo(models.User, {foreignKey: "userId"})
    }
  }
  commentAnswers.init({
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'commentAnswers',
  });
  return commentAnswers;
};