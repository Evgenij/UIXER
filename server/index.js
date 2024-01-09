require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/index')
const cors = require('cors')

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
	try {
		await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@clusteruixer.o2id98y.mongodb.net`, {
			useNewUrlParser: true,
		})
		app.listen(PORT, ()=>{
			console.log(`======= Server has been started in ${PORT} port =======`)
		})
	} catch (e) {
		console.log(e)
	}
}
// uixer
// MWAadDxlSUHU0Nnd

start()

