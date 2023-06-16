'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BadgesProgessQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      badgesQuestionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "BadgesQuestions",
          key: "id",
        },
      },
      questionId: {
        type: Sequelize.INTEGER
      },
      progess: {
        type: Sequelize.INTEGER
      },
      badgesName: {
        type: Sequelize.STRING
      },
      complete: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BadgesProgessQuestions');
  }
};

