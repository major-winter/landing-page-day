const express = require('express')

const app = express()
app.use(express.static('./'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})


const port = process.env.PORT || 5006

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})