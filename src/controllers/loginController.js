const bcrypt = require("bcrypt-nodejs");
const jwt = require("jwt-simple");

const { authSecret } = require("../../.env");
const { communication } = require("./utils/communication");

module.exports = {
  async signin(request, response) {
    // const { email, senha, nome } = request.body;
    console.log(request.body);
    return response.send("pronto");
    // if (!email || !senha) {
    //   return response.status(400).send("Informe usuário e senha!");
    // }

    // const sql = "SELECT email FROM InfoEmpregado WHERE email = ?";
    // const value = [email];

    // await comm
  },

  async create(request, response) {
    const { email, senha, nome } = request.body;
  },
};
