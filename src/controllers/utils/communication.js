const connection = require("../../database/connection");

module.exports = {
  async communication(sql, values) {
    return await connection.query(sql, values, (err, results, fields) => {
      if (err) throw err;
      return results;
    });
  },
};
