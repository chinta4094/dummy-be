const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const User = require('./User')
const PORT = 3001

const app = express() 

// app.use(cors())
app.use(bodyParser.json())

app.post('/user', async (req, res) => {
    const { name, email, password } = req.body
    const userLength = User.length
    await User.push({
        id: userLength + 1, name, email, password
    })
    console.log(User)
    res.send({
        message: 'Data Added Successfully', 
        data: req.body
    })
})

app.get('/', async(req, res) => {
    res.send({
        message: 'Fetched Data',
        result: User
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`)
})