const express = require('express');
const router  = express.Router();

//GET request
router.get('/', (req, res) => res.render('welcome')); //from views


module.exports = router;

