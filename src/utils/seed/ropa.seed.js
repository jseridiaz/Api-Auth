const mongoose = require('mongoose')
const Ropa = require('../../api/models/Ropa.model')
const seedRopa = require('../../data/ropa')

mongoose
  .connect(
    'DB_URL=mongodb+srv://jseridiaz:4JJu-mUSdAnHAeT@cluster0.fwv6abn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allRopa = await Ropa.find()
    if (allRopa.length) {
      await Ropa.collection.drop()
      console.log('All Ropa models was removed')
    }
  })
  .catch((err) =>
    console.log('Error by removing Collection. Error Type ' + err)
  )
  .then(async () => {
    await Ropa.insertMany(seedRopa)
    console.log('Seed of Ropa Collection was rigthly added')
  })
  .catch((err) =>
    console.log('Error by adding Seed Ropa Colection. Error Type: ' + err)
  )
  .finally(() => mongoose.disconnect())
