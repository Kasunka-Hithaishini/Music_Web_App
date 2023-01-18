const express = require('express')
const app = express()
const port = 8569

var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/blog")






app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
