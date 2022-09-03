const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receta', {
    idReceta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    preparacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fechacreacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idIngrediente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ingredientes',
        key: 'idIngrediente'
      }
    },
    imagen: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idReceta" },
        ]
      },
      {
        name: "idIngrediente",
        using: "BTREE",
        fields: [
          { name: "idIngrediente" },
        ]
      },
    ]
  });
};
