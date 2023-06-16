'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BadgesQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BadgesQuestion.belongsToMany(models.User, {through: "BadgesProgessQuestion", foreignKey: 'badgesQuestionId', otherKey: 'userId'})
      BadgesQuestion.hasMany(models.BadgesProgessQuestion)
    }
  }
  BadgesQuestion.init({
    badgesName: DataTypes.STRING,
    type: DataTypes.INTEGER,
    poin: DataTypes.INTEGER,
    condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BadgesQuestion',
  });
  return BadgesQuestion;
};