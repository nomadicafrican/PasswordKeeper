const express = require('express');
const router  = express.Router();

//Renders login page
router.get('/login', (req, res) => res.redirect('welcome')); //from views

module.exports = router;

