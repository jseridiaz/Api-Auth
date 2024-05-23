const User = require('../api/models/user.model')
const { verifyToken } = require('../config/jwt')

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      return res.status(404).json('No estas Utorizado')
    }
    const { id } = verifyToken(token)
    console.log(verifyToken(token))
    const user = await User.findById(id)
    user.password = null
    req.user = user

    next()
  } catch (err) {
    return res.status(400).json('Error type: ' + err)
  }
}

module.exports = { isAuth }
