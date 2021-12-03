const express = require('express');
const router  = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('login')); //from views folder

//Login Handle
router.post('/login', (req, res) => {
  console.log(req.body);
  res.render('dashboard');
})

//Register Page
router.get('/register', (req, res) => res.render('register'))

//Register Handle
router.post('/register', (req, res) => {
  console.log(req.body);
  res.render('dashboard');
})

//Dashboard Page
router.get('/dashboard', (req, res) => res.render('dashboard')); 

//Dashboard Handle
router.post('/dashboard', (req, res) => {
  console.log(req.body);
  res.render('dashboard');
})

module.exports = router;
