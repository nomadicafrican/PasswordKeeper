const express = require("express");
const router = express.Router();


// const { Pool } = require("pg");
// const dbParams = require("../lib/db");
// const db = new Pool(dbParams);
// db.connect();

module.exports = (db) => {
  router.get("/", (req, res) => {
    res.render("register.ejs");
  });
  router.post("/", (req, res) => {
    const userlogin = req.body;

    addUserToDatabase(userlogin, db)
      .then((userlogin) => {
        console.log('---------->',userlogin)
        // console.log(userlogin.rows)
         res.json({ userlogin});
        // res.redirect('/')
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};

const addUserToDatabase = (user, db) => {

  console.log('userExists', userExists(user,db))
  return userExists(user,db).then((res)=>{
    if (res){
      return new Promise((res,rej)=>{
        rej({message: 'pls enter new email'})
      })
    }else{
      return db.query(`INSERT INTO users ( email, name, password, organization_id)
      VALUES ($1,$2,$3,$4) Returning *; `, [ user.email, user.name, user.password, user.organization_id])
        .then((res) => {
         return res.rows[0]
          console.log('res', res) ;
        })
        .catch((error) => {
          console.log("err1", error);
        });
    }
  })
};
const userExists = (user, db)=> {
  return db.query(`SELECT email FROM  users WHERE email = $1;`, [ user.email])
    .then((res) => {

      console.log('hello', res.rows)
      if (res.rows.length > 0){
        // console.log('it exists')
      return true
      }else{
      console.log('it doesnt exists')
      return false
    }
    })
    .catch((error) => {
      console.log("err", error);
    });
}
