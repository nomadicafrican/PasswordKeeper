// const express = require('express');
// const router = express.Router();


// // GET email, username and password


// module.exports = (db) => {

//   router.post('/org_id/:id',(req,res) => {
//     const queryString = `DELETE FROM accounts WHERE id = $1`;
//     const queryString2= `SELECT organization_id FROM accounts WHERE id = $1`;
//     const acc_id = req.params.id ;

//     // db.query(queryString2, [acc_id])
//     // .then((response) => {
//     //   const org_id = response.rows[0].organization_id
//     //    res.redirect('password:/${org_id}');
//     // });

//     db.query(queryString, [acc_id])
//     .then((response) => {
//       console.log('already delete')

//       res.redirect('password/org_id');
//     });



//   });

//   return router;
// };
