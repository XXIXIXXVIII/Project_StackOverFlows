'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserActionAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  UserActionAnswer.init({
    userId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER,
    actionName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserActionAnswer',
  });
  return UserActionAnswer;
};