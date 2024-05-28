const User = require('../api/models/user.model')
const { verifyToken } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(404).json('No estas Autorizado')
    }
    const { id } = verifyToken(token)
    console.log(verifyToken(token))
    const user = await User.findById(id)
    user.password = null
    req.user = user

    if (
      user.rol == 'admin' ||
      (user.rol == 'user' && req.params.id === user.id)
    ) {
      next()
    } else {
      return res.status(400).json('No estás autorizado')
    }
  } catch (err) {
    return res.status(400).json('Error type: ' + err)
  }
}

const isAuthAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')
    if (!token) {
      return res
        .status(404)
        .json(
          'No estás autorizado. Puedes cambiar los permisos de Usuario en Ajustes -> Usuarios'
        )
    }
    const { id } = verifyToken(token)
    const user = await User.findById(id)
    user.password = null
    req.user = user
    console.log(req.params.id, id)
    if (user.rol == 'admin') {
      next()
    } else {
      return res
        .status(400)
        .json(
          'No estás autorizado. Puedes cambiar los permisos de Usuario en Ajustes -> Usuarios'
        )
    }
  } catch (err) {
    res.status(400).json('Error Type: ' + err)
  }
}
module.exports = { isAuth, isAuthAdmin }
