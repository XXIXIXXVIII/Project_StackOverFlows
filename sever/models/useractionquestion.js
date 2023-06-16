'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserActionQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserActionQuestion.belongsTo(models.Save, {foreignKey: 'saveId' })
      UserActionQuestion.belongsTo(models.Questions);
      UserActionQuestion.belongsTo(models.User);
      
      
    }
  }
  UserActionQuestion.init({
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    actionName: DataTypes.STRING,
    saveId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserActionQuestion',
  });
  return UserActionQuestion;
};