const express = require('express')
const app = express()
const port = 3000

app.get('/sarah', (req, res) => {
  res.send('Hoiiii!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('static'));