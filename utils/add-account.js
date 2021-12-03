const addAccount = (account_id,db) => {
  return db.query(`INSERT INTO name, organizations_email, organizations_password, category FROM accounts WHERE id =$1`,[account_id])
    .then((result) => {
      return result.rows;
    });
};

module.exports = {addAccount}
