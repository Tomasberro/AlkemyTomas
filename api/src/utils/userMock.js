const { User } = require("../db.js");
const user = [
    {
    name: "Tomas",
    mail: "tomas@hotmail.com",
    password: "1234567"
    },
  ];

  const userData = async () => {
    for (let item of user) {
      await User.create({
        name: item.name,
        mail: item.mail,
        password: item.password,
      });
    }
  }

    module.exports = { userData };