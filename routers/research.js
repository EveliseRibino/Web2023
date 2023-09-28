const express = require('express');
const router = express.Router();

router.use('/create', (req, res) => {
  res.render('create-research')
})    

router.use('/edit', (req, res) => {
  res.render('edit-research')
})

router.use('/collect', (req, res) => {
  res.render('collect-research')
})

router.use('/report', (req, res) => {
  res.render('research-report')
})

router.use('/thanks', (req, res) => {
  res.render('research-thanks')
})

module.exports = router