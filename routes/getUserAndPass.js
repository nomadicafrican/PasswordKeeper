const express = require('express');
const router = express.Router();
const GetdataFunc = require('../public/scripts/data-queries');

// GET email, username and password
module.exports = (db) => {
  router.get('/:id',(req,res) => {
    GetdataFunc.getEmailUserPass(req.params.id,db)
      .then((data) => {
        console.log('data', data)
        res.json(data)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
//



