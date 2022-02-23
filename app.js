const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const chalk = require('chalk');
const routes = require('./routes/web')
const app = express()
const port = 3000


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// dependency view ejs
app.set('view engine', 'ejs')
app.use(expressLayouts);

// use 'public' sebagai asset
app.use(express.static('public'))

app.use(routes) //routes

// blank page
app.use('/', (req, res) =>{
  res.status(404)
  res.render('err/404', {layout: 'layouts/main'})
})

app.listen(port, () => {
  console.log(chalk`Server is running {green http://127.0.0.1:${port}}`)
})