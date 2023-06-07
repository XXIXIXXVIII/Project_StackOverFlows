'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Questions.belongsToMany(models.Tags, {
        through: "QuestionsTags",
        foreignKey: "questionId", // cột tham chiếu đến bảng Questions trong bảng trung gian
        otherKey: "tagId" // cột tham chiếu đến bảng Tags trong bảng trung gian
      })
      Questions.belongsTo(models.User, {foreignKey: "userId"})
      Questions.hasMany(models.Answers)
      Questions.hasMany(models.commentQuestion)
      Questions.belongsToMany(models.User, {through: "`userfollowquestions`", foreignKey: 'questionId', otherKey: 'userId'})
    }
  }
  Questions.init({
    title: DataTypes.TEXT('long'),
    content: DataTypes.TEXT('long'),
    view: DataTypes.INTEGER,
    tick: DataTypes.BOOLEAN,
    like: DataTypes.INTEGER,
    totalAnswers: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};