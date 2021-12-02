
const getEmailUserPass = (org_id,db) => {
  return db.query(`SELECT name, organizations_email, organizations_password, category FROM accounts WHERE organization_id =$1`,[org_id])
    .then((result) => {
      return result.rows;
    });
};

// const deletePassword = (org_id,acc_id, db) => {
//   return db.query(`UPDATE accounts SET password = NULL
//   WHERE organization_id =$1 AND accounts.id = $2;`, [ org_id, acc_id ])
//   .then((result) => {
//     // console.log(result.rows)
//     return result.rows;
//   });
// }
//
module.exports = {getEmailUserPass};

