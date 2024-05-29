const mongoose = require('mongoose')
const Conjunto = require('../../api/models/conjunto.model')
const seedConjunto = require('../../data/conjunto')

mongoose
  .connect(
    'DB_URL=mongodb+srv://jseridiaz:4JJu-mUSdAnHAeT@cluster0.fwv6abn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allConjunto = await Conjunto.find()
    if (allConjunto.length) {
      await Conjunto.collection.drop()
      console.log('All Conjunto models was removed')
    }
  })
  .catch((err) =>
    console.log('Error by removing Conjunto Collection. Error Type ' + err)
  )
  .then(async () => {
    await Conjunto.insertMany(seedConjunto)
    console.log('Seed of Conjunto Collection was rigthly added')
  })
  .catch((err) =>
    console.log('Error by adding Seed Conjunto Colection. Error Type: ' + err)
  )
  .finally(() => mongoose.disconnect())
