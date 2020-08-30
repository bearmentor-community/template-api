require('dotenv-flow').config()
const express = require('express')
const helmet = require('helmet')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const rootRouter = require('./routes/root')
const authRouter = require('./routes/auth')
const usersRouter = require('./routes/users')
const itemsRouter = require('./routes/items')
const imagesRouter = require('./routes/images')
const searchRouter = require('./routes/search')

const app = express()

app.use(helmet())
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../public')))

app.use('/', rootRouter)
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/items', itemsRouter)
app.use('/images', imagesRouter)
app.use('/search', searchRouter)

module.exports = app
