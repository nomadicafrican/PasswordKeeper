const express = require('express');
const router  = express.Router();

//Login Page
router.get('/login', (req, res) => res.send('Login'));

//Register Page
router.get('/register', (req, res) => res.send('Register'));

module.exports = router;

// /*
//  * All routes for Users are defined here
//  * Since this file is loaded in server.js into api/users,
//  *   these routes are mounted onto /users
//  * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
//  */

// const express = require('express');
// const router  = express.Router();

// //login page
// module.exports = (db) => {
//   router.get("/login", (req, res) => {
//     db.query(`SELECT * FROM users;`)
//       .then(data => {
//         const users = data.rows;
//         res.json({ users });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };
