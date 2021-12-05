const express = require("express");
const router = express.Router();
// getFunction = require('../utils/add-account')

const Add = (data,db) => {
  return db.query( `INSERT INTO accounts(name, organizations_email, organizations_password,category, organization_id)
  VALUES ($1,$2,$3,$4,$5);
  `, [data.name, data.organizations_email, data.organizations_password,data.category, data.organization_id])
  .then((result) => {
    // console.log('hi this is .then');
    return result.rows;
  })
}

module.exports = (db) => {
  router.get("/", (req, res) => {
    const queryString =`
    SELECT * FROM users WHERE id = $1
    `
 db.query(queryString, [req.session['user_id']])
  .then((response)=>{
    const user = response.rows[0]
    // console.log(response.rows[0])
    const templateVars = {
      organization_id : user.organization_id
    }
        res.render("addPage.ejs", templateVars );
  })

  });
  router.post ('/:id', (req,res)=>{
    const data = {...req.body, id: req.params.id}
    console.log('data------->',data)

    console.log('about to call Add')
    Add(data, db)
    .then((result)=>{
      res.redirect(`/password/${req.session['user_id']}`)
    }).catch((err)=>{
      console.log('error',err)
      res.status(404).send('something went wrong')
    })
  })
return router
}
