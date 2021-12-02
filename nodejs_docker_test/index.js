const express = require('express')
let app = express()

app.use(express.static('.'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

const PORT  = 3000
app.listen(3000, () => {
    console.log(`Server up and running on port ${PORT}`)
})
