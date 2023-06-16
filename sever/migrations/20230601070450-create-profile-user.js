'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProfileUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING(2000),
      },
      aboutme: {
        type: Sequelize.STRING(2000),
      },
      websiteLink: {
        type: Sequelize.STRING
      },
      twitterLink: {
        type: Sequelize.STRING
      },
      githubLink: {
        type: Sequelize.STRING
      },
      point: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      userId: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('ProfileUsers');
  }
};