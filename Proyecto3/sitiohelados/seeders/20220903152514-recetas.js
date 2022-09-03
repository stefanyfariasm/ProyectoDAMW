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
     let arreglo=[{"nombre":"GelatoMix","descripcion":"helado de mix de frutas","preparacion":"cortar las frutas y batir con crema de leche","imagen":"https://dulcesdiabeticos.com/wp-content/uploads/2017/06/helados-de-frutas-saludables-sin-azucar_opt-1.jpg","pais":"Ecuador","idIngrediente":1},
     {"nombre":"Polo","descripcion":"helado de vainilla con cobertura de chocolate","preparacion":"batir con crema de leche con la vainilla y al final cubrir con una capa de chocolate","imagen":"https://us.123rf.com/450wm/lucielang/lucielang1107/lucielang110700024/9949240-cubiertas-de-chocolate-con-helado-de-bocado-falta-m%C3%A1s-de-blanco.jpg?ver=6","pais":"Ecuador","idIngrediente":2},
     {"nombre":"Cono Cream","descripcion":"helado de cono de mantecado","preparacion":"batir con crema de leche con la vainilla","imagen":"https://us.123rf.com/450wm/jalcaraz/jalcaraz1606/jalcaraz160600002/59920481-aislado-de-vainilla-cono-de-helado.jpg?ver=6","pais":"Puerto Rico","idIngrediente":3},
     {"nombre":"Fruti Crema","descripcion":"helado de frutas batidas con crema de leche","preparacion":"cortar las frutas y batir con crema de leche","imagen":"https://media.istockphoto.com/photos/strawberry-sundae-with-whipped-cream-and-a-spoon-picture-id914784162?k=20&m=914784162&s=170667a&w=0&h=gtk_0dym4QINfJq3WvcJqZrFw4U2ql5I6KngsaKnM5A=","pais":"Colombia","idIngrediente":4},
     {"nombre":"Natural Cream","descripcion":"helado de vainilla con almendras","preparacion":"cbatir con crema de leche con la vainilla y al final agregar almendrad picadas","imagen":"https://www.hogarmania.com/archivos/201507/helado-de-almendras-hogarmania-668x400x80xX.jpg","pais":"Perú","idIngrediente":1},
     {"nombre":"Pequeñas Delicias","descripcion":"Helado de cereza gourmet","preparacion":"cortar las cerezas y batir con crema de leche","imagen":"https://thumbs.dreamstime.com/b/tres-bolas-del-helado-con-la-cereza-31592300.jpg","pais":"Japón","idIngrediente":2},
     {"nombre":"Sweet Frost","descripcion":"Helado de vainilla con M&M","preparacion":"batir con crema de leche con la vainilla y al final agregar M&M","imagen":"https://i.pinimg.com/originals/0c/93/19/0c93194b8a6fdacf24f71c0756c00e00.jpg","pais":"Ecuador","idIngrediente":3},
     {"nombre":"Coco Mix","descripcion":"Helado de coco con chocolate","preparacion":"cortar el coco, picar el chocolate y batir con crema de leche","imagen":"https://149509661.v2.pressablecdn.com/wp-content/uploads/2020/04/paletasdeyogurtconcocoFT-1.jpg","pais":"Corea","idIngrediente":4}
    ];
   
    for (var i = arreglo.length - 1; i >= 0; i--) {
      let receta = arreglo[i]
      await queryInterface.bulkInsert('Receta', [{  
           idReceta: i,     
           nombre: receta['nombre'],  
            descripcion: receta['descripcion'], 
            preparacion: receta['preparacion'], 
            pais:receta['pais'],
            fechacreacion: new Date(), 
            idIngrediente: receta['idIngrediente'],
            imagen: receta['imagen'],
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

     await queryInterface.bulkDelete('Receta', null, {});  

  }
};
