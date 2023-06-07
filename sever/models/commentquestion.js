'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commentQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      commentQuestion.belongsTo(models.User, {foreignKey: 'userId' })
      commentQuestion.belongsTo(models.Questions, {foreignKey: 'questionId'})

    }
  }
  commentQuestion.init({
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'commentQuestion',
  });
  return commentQuestion;
};