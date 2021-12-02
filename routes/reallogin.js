const express = require('express');
const router = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    // const templateVars ={
    //   user: req.session.userid
    // }
    res.render("login.ejs",);
  });
  router.post("/", (req, res) => {
    const user = req.body.email;

    const queryString = `SELECT * FROM users WHERE email = $1`;
    db.query(queryString, [user]).then((response) => {
      if (!response.rows[0]) {
        res.status(400).send("Pls register");
        return;
      } else {
        console.log(response.rows)
        req.session["user_id"] = response.rows[0].organization_id;
        console.log(req.session['user_id'])
        res.redirect("/register");
      }
    });
  });

  return router;
};
