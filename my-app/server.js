const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const request = require('request')
const cors = require('cors')

app.use(cors())

app.use(express.static(path.join(__dirname, 'dist', 'my-app')))

const googlePlaceQueryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyCQxrCycy69Nm24iI3nXOfLRNNXLyHfs5Y"

app.get('/food', (req, res) => {
    request.get(googlePlaceQueryUrl)
    .pipe(res);
});

// app.get('/', (req, res) => res.send("Hello World"))
app.listen(port, () => console.log('Example app listen on port ${port}!'))