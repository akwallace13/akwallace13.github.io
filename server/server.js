const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db.js')

app.use(cors())

//get puzzle(s)
app.get('/food_and_drink', async (req, res) => {
    //const userEmail = 'test@test.com'
    //res.send('food and drink test')
    try {
    const food_and_drink_puzzles = await pool.query('SELECT * FROM food_and_drink_puzzles')
    res.json(food_and_drink_puzzles.rows)
    } catch (err) {
        console.error(error)
    }
})

app.listen(PORT, ( )=> console.log(`Server running on PORT ${PORT}`))