'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('receta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      preparacion: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      fechacreacion: {
        type: Sequelize.DATE
      },
      idIngrediente: {
        type: Sequelize.INTEGER
      },
      imagen: {
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
    await queryInterface.dropTable('receta');
  }
};