require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const ropaRoute = require('./src/api/routes/ropa.routes')
const conjuntoRoutes = require('./src/api/routes/conjunto.routes')
const app = express()
const PORT = 3000

app.use(express.json())
connectDB()

app.use('/ropa', ropaRoute)
app.use('/conjunto', conjuntoRoutes)

app.use('*', (req, res, next) => {
  return res.status(400).json('Route not found')
})

app.listen(PORT, () => {
  console.log('Concexion establecida en puerto http://localhost:' + PORT)
})
