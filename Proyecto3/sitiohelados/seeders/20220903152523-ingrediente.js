'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let arrIngredientes = ["crema de leche", "frutas", "endulzante", "chocolate"];
     let arrCantidad = ["1 taza crema de leche", "3 tazas frutas", "2 sobres endulzante", "1 barra de chocolate"];
     for (let i = 1; i <5; i++) {  
      await queryInterface.bulkInsert('Ingredientes', [{  
          nombre: arrIngredientes[i-1],  
          idIngrediente: i, 
          cantidad: arrCantidad[i-1],          
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Ingredientes', null, {});  
  }
};
