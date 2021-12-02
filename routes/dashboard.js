const express = require('express');
const router  = express.Router();

//Dashboard Page
router.get('/users/dashboard', (req, res) => res.render('dashboard')); //from views folder

//Dashboard Handle
router.post('/users/dashboard', (req, res) => {
  console.log(req.body);
  res.render('dashboard');
})

module.exports = router;
