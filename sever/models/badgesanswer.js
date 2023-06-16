'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BadgesAnswer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BadgesAnswer.belongsToMany(models.User, {through: "BadgesProgessAnswer", foreignKey: 'badgesAnswerId', otherKey: 'userId'})
      BadgesAnswer.hasMany(models.BadgesProgessAnswer)
    }
  }
  BadgesAnswer.init({
    badgesName: DataTypes.STRING,
    type: DataTypes.INTEGER,
    poin: DataTypes.INTEGER,
    condition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BadgesAnswer',
  });
  return BadgesAnswer;
};