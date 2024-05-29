const { isAuthAdmin } = require('../../middlewares/auth.middlewares')
const {
  getConjuntos,
  postConjunto,
  updateConjunto,
  deleteConjunto
} = require('../controllers/conjunto.controllers')

const conjuntoRoutes = require('express').Router()

conjuntoRoutes.get('/', getConjuntos)
conjuntoRoutes.post('/', [isAuthAdmin], postConjunto)
conjuntoRoutes.put('/:id', updateConjunto)
conjuntoRoutes.delete('/:id', deleteConjunto)

module.exports = conjuntoRoutes
