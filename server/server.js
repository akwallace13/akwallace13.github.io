const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db.js')

app.use(cors())

//get puzzle(s)
// app.get('client/src/components/FoodAndDrinkGame.html', async (req, res) => {
//     //const userEmail = 'test@test.com'
//     //res.send('food and drink test')
//     try {
//     const food_and_drink_puzzles = await pool.query('SELECT * FROM food_and_drink_puzzles')
//     res.json(food_and_drink_puzzles.rows)
//     } catch (err) {
//         console.error(error)
//     }
// })

// app.get('client/src/components/JobGame.html', async (req, res) => {
//     //const userEmail = 'test@test.com'
//     //res.send('food and drink test')
//     try {
//     const jobs_puzzles = await pool.query('SELECT * FROM jobs_puzzles')
//     res.json(jobs_puzzles.rows)
//     } catch (err) {
//         console.error(error)
//     }
// })

// app.get('client/src/components/PhraseGame.html', async (req, res) => {
//     //const userEmail = 'test@test.com'
//     //res.send('food and drink test')
//     try {
//     const phrase_puzzles = await pool.query('SELECT * FROM phrase_puzzles')
//     res.json(phrase_puzzles.rows)
//     } catch (err) {
//         console.error(error)
//     }
// })

// app.get('client/src/components/PlaceGame.html', async (req, res) => {
//     //const userEmail = 'test@test.com'
//     //res.send('food and drink test')
//     try {
//     const place_puzzles = await pool.query('SELECT * FROM place_puzzles')
//     res.json(place_puzzles.rows)
//     } catch (err) {
//         console.error(error)
//     }
// })

// app.get('client/src/components/RandomGame.html', async (req, res) => {
//     //const userEmail = 'test@test.com'
//     //res.send('food and drink test')
//     try {
//     const random_puzzles = await pool.query('SELECT * FROM random_puzzles')
//     res.json(random_puzzles.rows)
//     } catch (err) {
//         console.error(error)
//     }
// })

app.get('/client/src/components/WordGame.html', async (req, res) => {
    //res.send('test')
    //const userEmail = 'test@test.com'
    //res.send('food and drink test')
    try {
        //await
    const word_puzzles = await pool.query('SELECT * FROM word_puzzles') //WHERE user_email = $1', [userEmail])
    res.json(word_puzzles.rows)
    } catch (err) {
        console.error(error)
    } 
})

app.listen(PORT, ( )=> console.log(`Server running on PORT ${PORT}`))