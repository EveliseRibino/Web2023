const express = require('express');
const router = express.Router();

router.use('/create', (req, res) => {
  res.render('create-account')
})  

router.use('/recover-password', (req, res) => {
  res.render('recover-password')
})  

module.exports = router