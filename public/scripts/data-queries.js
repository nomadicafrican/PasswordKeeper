
const getEmailUserPass = (org_id,db) => {
  return db.query(`SELECT id, name, organizations_email, organizations_password, category FROM accounts WHERE organization_id =$1`,[org_id])
    .then((result) => {
      return result.rows;
    });
};

// const Eddit = (name, email, password,category,db) => {
//   db.query(db.querry (`
//     UPDATE account
//     SET
//         name = $1,
//         organizations_email = $2,
//         organizations_password= $3,
//         category =$4,
//     WHERE
//         organization = req.param.id; `, [name, email, password,category])
//   .then((result) => {
//     return result.rows;
// }


// module.exports = {getEmailUserPass};
// .then((result)=>{
// QueryString = ` UPDATE account SET name= $1, organizations_email = $2,organizations_password = $3,category =$4 WHERE account.id = req.body.id`
//   db.query(QueryString)
// })
