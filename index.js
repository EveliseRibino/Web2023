const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// Serve static assets inside public folder, e.g. css files
app.use(express.static(path.join(__dirname, 'public')))

// Setup views and view engine
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Research pages router
const research = require('./routers/research')
app.use('/research', research)

// Account pages router
const account = require('./routers/account')
app.use('/account', account)

// Home Page
app.get('/', (req, res) => {
  res.render('home')
})

// Login Page
app.get('/login', (req, res) => {
  res.render('login')
})

// Server startup
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})