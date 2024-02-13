const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT  || 5000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Worl!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})