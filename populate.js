require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany() //Deleting current entries in DB to ensure clean DB
    await Product.create(jsonProducts)
    console.log('Sucessfuly added Products into DB!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
