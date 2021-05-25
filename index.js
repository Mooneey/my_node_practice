const express = require('express')
const app = express()
const port = 9999

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.get('/api', (req, res)=> {
  res.send('This is API page')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})