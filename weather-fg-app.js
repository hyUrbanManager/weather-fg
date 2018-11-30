const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.sendfile('./dist/html/index.html')
})

app.listen(8002, () => {
    console.log('listening...')
})