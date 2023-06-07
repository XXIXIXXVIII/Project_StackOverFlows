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
        type: Sequelize.STRING
      },
      aboutme: {
        type: Sequelize.STRING
      },
      websiteLink: {
        type: Sequelize.STRING
      },
      fbLink: {
        type: Sequelize.STRING
      },
      githubLink: {
        type: Sequelize.STRING
      },
      point: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      andress: {
        type: Sequelize.STRING
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