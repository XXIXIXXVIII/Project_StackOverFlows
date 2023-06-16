'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BadgesProgessAnswers', {
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
      badgesAnswerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "BadgesAnswers",
          key: "id",
        },
      },
      answerId: {
        type: Sequelize.INTEGER
      },
      badgesName: {
        type: Sequelize.STRING
      },
      progess: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('BadgesProgessAnswers');
  }
};