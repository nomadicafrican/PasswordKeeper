const express = require('express');
const router = express.Router();
const GetdataFunc = require('../public/scripts/data-queries');

// GET email, username and password
module.exports = (db) => {
  router.get('/:id',(req,res) => {
    GetdataFunc.getEmailUserPass(req.params.id,db)
      .then((data) => {
<<<<<<< HEAD
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
=======
        console.log('data', data)
        res.json(data)
>>>>>>> f705be3be021e10d3a97339af88ba90f3c847b4a
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



