const {buildDB} = require('./db/populateDataBase')
const express = require('express')
const {Cheese} = require('./models/')
const app = express()
buildDB()


app.get('/feta', async (req, res) => {
    const queryedCheese = await Cheese.findOne({where: {title: 'Feta'}})
    let {title, description} = queryedCheese
    let payload = {
        title: title,
        description: description
    }
    res.send(payload)
    // Database query
})

app.get('/start-with-c', async (req, res) => {
    const dbQuery = await Cheese.findAll()
    let startsWithC = dbQuery.filter((cheese) => {
        if(cheese.title[0] ==='C') {
            return true
        }
    })

    res.send(startsWithC)
})


app.listen(3000, () => {
    console.log('The serve is live and listening at http://localhost:3000');
})