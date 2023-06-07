'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tags.belongsToMany(models.User, {through: "UserFollowTags", foreignKey:"tagId", otherKey: 'userId'})
      Tags.belongsToMany(models.Questions, {through: "QuestionsTags", foreignKey:"tagId", otherKey: 'questionId'})
    }
  }
  Tags.init({
    nameTag: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    view: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};