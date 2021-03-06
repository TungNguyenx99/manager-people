import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 5000

app.use(cors())

connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})