const express = require('express')
const router = express.Router()

const appcontroller = require('../controllers/AppController')

router.get('/', appcontroller.index)



module.exports = router