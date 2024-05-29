const { isAuth } = require('../../middlewares/auth.middlewares')
const {
  getRopa,
  postRopa,
  updateRopa,
  deleteRopa
} = require('../controllers/ropa.controllers')

const ropaRoute = require('express').Router()

ropaRoute.get('/', getRopa)
ropaRoute.post('/', [isAuth], postRopa)
ropaRoute.put('/:id', updateRopa)
ropaRoute.delete('/:id', deleteRopa)

module.exports = ropaRoute
