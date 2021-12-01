const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("login.ejs");
  });
  router.post("/", (req, res) => {
    const userlogin = req.body;

    addUserToDatabase(userlogin, db)
      .then((userlogin) => {
        console.log('---------->',userlogin)
        // console.log(userlogin.rows)
        res.json({ userlogin});
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
