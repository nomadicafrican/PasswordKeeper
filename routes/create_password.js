const express = require('express');
const router = express.Router();


// GET email, username and password


module.exports = (db) => {
  router.get('/',(req,res) => {
    res.render('editPage')
  });
  return router;
};
