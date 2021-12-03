const express = require('express');
const router = express.Router();
const GetdataFunc = require('../utils/get-email-user-pass-query');

// GET email, username and password
module.exports = (db) => {
  router.get('/:id',(req,res) => {
    GetdataFunc.getEmailUserPass(req.params.id,db)
      .then((data) => {
        const arr =[];
        const templateVar = {};

        for (let i in data) {
          arr.push(data[i].name);
        }
        // console.log(arr);

        // console.log('data', data);


        for (let j in data) {
          for (let l of arr) {
            if (data[j].name === l) {
              templateVar[l] = data[j];
            }
          }
          }
        const result = {templateVar};
        // console.log('result', result);
        res.render("loadingID", result);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/:id', (req,res)=>{
    const data = {...req.body, id: req.params.id}
    console.log('data', data)
    if(data.id === 0){
      Add(data ,db)
      .then((result)=>{
        res.redirect(`/password/${req.session['user_id']}`)
        // console.log('updated succesfully')
      })
        .catch((err)=>{
          console.log('error',err)
          res.status(404).send('something went wrong')
        })
    } else{
      Edit(data ,db)
      .then((result)=>{
        console.log('updated succesfully')
        res.redirect(`/password/${req.session['user_id']}`)
      })
      .catch((err)=>{
        console.log('error',err)
        res.status(404).send('something went wrong')
        })
    }
   })


   return router
  };

  const Edit = ({name, email, password,category,id},db) => {
   return db.query( `
     UPDATE accounts
     SET
         name = $1,
         organizations_email = $2,
         organizations_password= $3,
         category =$4
     WHERE
         id = $5 `, [name, email, password,category, id])
   .then((result) => {

     return result.rows;
   })


  }
  const Add = (data,db) => {
    return db.query( `
    INSERT INTO accounts (name, email, password, category)
    VALUES  ($1,$2,$3,$4)
    `, [data.name, data.email, data.password,data.category])
    .then((result) => {
      // console.log('hi this is .then');
      return result.rows;
    })
  }




