const connection = require("../config/database");

const getAllUsers = async () => {
  const [results, fields] = await connection.query("select * from Users u");
  return results;
};

const getUserById = async (userId) => {
  const [results, fields] = await connection.query(
    `select * from Users where id = ?`,
    [userId]
  );
  const user = results && results.length > 0 ? results[0] : {};
  return user;
};

const addUserToDB = async (email, name, city) => {
  const [results, fields] = await connection.query(
    `insert into Users(email, name, city) values(?, ?, ? )`,
    [email, name, city]
  );
  return results.affectedRows;
};

const updateUserToDB = async (email, name, city, id) => {
  const [results, fields] = await connection.query(
    `update Users set email = ?, name = ?, city = ? where id = ?`,
    [email, name, city, id]
  );
  //console.log(">>>>>>> " + results.affectedRows);
  return results.affectedRows;
};

const deleteUserToDB = async (id) => {
  const [results, fields] = await connection.query(
    `delete from Users where id = ?`,
    [id]
  );
  return results.affectedRows;
};
module.exports = {
  getAllUsers,
  getUserById,
  addUserToDB,
  updateUserToDB,
  deleteUserToDB,
};
