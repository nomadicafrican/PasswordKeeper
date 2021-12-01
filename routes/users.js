const express = require('express');
const router  = express.Router();

//Login Page
router.get('/login', (req, res) => res.render('login')); //from views folder



//Register Page
router.get('/register', (req, res) => res.render('register')); //from views folder





module.exports = router;

