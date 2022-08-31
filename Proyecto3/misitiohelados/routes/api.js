var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Receta = require('../models').recetas;  
const Ingrediente = require('../models').ingredientes;  


router.get('/recetas', function(req, res, next) {
  Receta.findAll({  
    attributes: { exclude: ["updatedAt"] }  
})  
.then(recetas => {  
    res.json(recetas);  
})  
.catch(error => res.status(400).send(error)) 
});

router.get('/ingrediente', function(req, res, next) {
    Ingrediente.findAll({  
      attributes: { exclude: ["updatedAt"] }  
  })  
  .then(recetas => {  
      res.json(recetas);  
  })  
  .catch(error => res.status(400).send(error)) 
  });

  router.get('/ingredientes/:id', function(req, res, next) {
    Ingrediente.findOne({  
      where: { id: req.params.id }
  })  
  .then(recetas => {  
      res.json(recetas);  
  })  
  .catch(error => res.status(400).send(error)) 
  });
  
router.get('/recetas/:id', function(req, res, next){
  Receta.findOne({
    where: { id: req.params.id }
  })
  .then(recetas => {
    res.json(recetas);
  })
  .catch(error => res.status(400).send(error))
})
router.get('/recetas/ingredientes/:idIngrediente', function(req, res, next){
  Receta.findAll({
    where: { ingredientes: req.params.idIngrediente }
  })
  .then(recetas => {
    res.json(recetas);
  })
  .catch(error => res.status(400).send(error))
})
module.exports = router;