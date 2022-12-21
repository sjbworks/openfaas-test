"use strict";
const mysql = require("mysql2/promise");

module.exports = async (event, context) => {
  const connection = await mysql.createConnection({
    host: "hosturl",
    port: 20306,
    user: "user",
    password: "password",
    database: "database",
  });

  try {
    const [fields] = await connection.execute("SELECT * FROM user;");
    return context.status(200).succeed({ fields });
  } catch {
    return context.status(500);
  }
};
