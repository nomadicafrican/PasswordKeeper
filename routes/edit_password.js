const express = require('express');
const router = express.Router();


// GET email, username and password


module.exports = (db) => {
  router.get('/',(req,res) => {
    // res.render('editPage');
  });

  router.get('/:id',(req,res) => {
    const queryString = `SELECT * FROM accounts WHERE id = $1`;
    db.query(queryString, [req.params.id]).then((response) => {
      // console.log('response.rows[0]', response.rows[0]);
      const account = response.rows[0];

      res.render('editAccountForm',account);
    });


  });

  return router;
};
