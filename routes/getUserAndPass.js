const express = require('express');
const router = express.Router();
const GetdataFunc = require('../public/scripts/data-queries');

// GET email, username and password
module.exports = (db) => {
  router.get('/:id',(req,res) => {
    GetdataFunc.getEmailUserPass(req.params.id,db)
      .then((data) => {
        const arr =[];
        const templateVar = {};

        for (let i in data) {
          arr.push(data[i].name)
        }
        console.log(arr)


        for (let j in data) {
          for (let l of arr) {
            if (data[j].name === l) {
              templateVar[l] = data[j]
              }
            }
          }

        const result = {templateVar}

        res.render("loadingID", result)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // router.post('/:id/delete',(req,res) => {
  //   GetdataFunc.deletePassword(req.params.id,db)
  //     .then((data) => {
  //       res.json(data)
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  // });




  return router;
};



//



