const connectToMongo = require('./db');
const express = require('express')
const path = require("path")
require("dotenv").config()

connectToMongo(); 

const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`myNotebook backend listening on port ${port}`)
})