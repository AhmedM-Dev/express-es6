import express from 'express'

const app = express()

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    response: 'It works.'
  })
})

app.use(router)

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
})
