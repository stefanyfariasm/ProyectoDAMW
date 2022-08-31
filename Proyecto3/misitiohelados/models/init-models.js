var DataTypes = require("sequelize").DataTypes;
const ingredientes = require("./ingredientes");
var _ingredientes = require("./ingredientes");
var _recetas = require("./recetas");
var _sequelizemeta = require("./sequelizemeta");

function initModels(sequelize) {
  var ingredientes = _ingredientes(sequelize, DataTypes);
  var recetas = _recetas(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  
  ingredientes.belongsTo(recetas, { as: "id", foreignKey: "idIngrediente"});
  recetas.hasMany(ingredientes, { as: "id", foreignKey: "id"});

  return {
    ingredientes,
    recetas,
    sequelizemeta,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

