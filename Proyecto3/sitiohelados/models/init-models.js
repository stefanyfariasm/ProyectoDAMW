var DataTypes = require("sequelize").DataTypes;
var _ingredientes = require("./ingredientes");
var _receta = require("./receta");
var _sequelizemeta = require("./sequelizemeta");

function initModels(sequelize) {
  var ingredientes = _ingredientes(sequelize, DataTypes);
  var receta = _receta(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);

  receta.belongsTo(ingredientes, { as: "idIngrediente_ingrediente", foreignKey: "idIngrediente"});
  ingredientes.hasMany(receta, { as: "receta", foreignKey: "idIngrediente"});

  return {
    ingredientes,
    receta,
    sequelizemeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
