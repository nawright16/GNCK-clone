// DEPENDENCIES
const express = require('express')
const { Sequelize } = require('sequelize')
const app = express()

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Create some tasks!'
    })
})

// CONTROLLERS 
const taskController = require('./controllers/task_controller')
app.use('/tasks', taskController)
const listController = require('./controllers/list_controller')
app.use('/lists', listController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`GSD on port: ${process.env.PORT}`)
})