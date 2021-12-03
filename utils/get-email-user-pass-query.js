const getEmailUserPass = (org_id,db) => {
  return db.query(`SELECT id, name, organizations_email, organizations_password, category FROM accounts WHERE organization_id =$1`,[org_id])
    .then((result) => {
      return result.rows;
    });
};

module.exports = {getEmailUserPass}
