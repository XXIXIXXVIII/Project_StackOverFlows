'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(2000),
        allowNull: false,
      },
      view: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      tick: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      like: {
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      userId: {
        type: Sequelize.INTEGER
      },
      totalAnswers: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
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
    await queryInterface.dropTable('Questions');
  }
};