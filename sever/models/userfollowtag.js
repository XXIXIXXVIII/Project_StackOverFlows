'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFollowTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserFollowTag.belongsTo(models.Tags, {as: 'tag',foreignKey: 'tagId' })
      UserFollowTag.belongsTo(models.User, {foreignKey: 'userId' })
    }
  }
  UserFollowTag.init({
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserFollowTag',
  });
  return UserFollowTag;
};