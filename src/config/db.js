const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Connected in BBDD MongoDB')
  } catch (error) {
    console.log('Error by connecting in BBDD MongoDB. Errortype: ' + error)
  }
}
module.exports = { connectDB }
