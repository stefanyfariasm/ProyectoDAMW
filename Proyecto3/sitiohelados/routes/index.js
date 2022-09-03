var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/recetas', function(req, res, next) {  
  
  	
  models.receta.findAll({
    include: [{ 
      model: models.ingredientes,
      as: 'idIngrediente_ingrediente'
    }],
  })
 .then(recetas => {
    res.json(recetas)
 })
 .catch(error => res.status(400).send(error))


});
module.exports = router;

router.get('/ingredientes', function(req, res, next) {  
    
  models.ingredientes.findAll({
     include: [{ 
        model: models.receta,
        as: 'receta'
     }],
  })
 .then(ingredientes => {
    res.json(ingredientes)
 })
 .catch(error => res.status(400).send(error))


});