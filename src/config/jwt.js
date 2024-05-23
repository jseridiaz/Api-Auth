const jwt = require('jsonwebtoken')

const generateToken = (id, userName, rol) => {
  return jwt.sign({ id, userName, rol }, process.env.JWT_SECRET, {
    expiresIn: '1w'
  })
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}
module.exports = { generateToken, verifyToken }
