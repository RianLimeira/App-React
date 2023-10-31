//Constantes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/index.js");
const user = require("./models/user.js");

const User = db.User;

const PORT = process.env.PORT || 8080;

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json({
    error: false,
    message: "ok",
    users,
  });
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.emailUser,
      password: req.body.passwordUser,
    },
  })
    .then((user) => {
      if (user) {
        // res.send(user)
        return res.status(200).json({
          error: false,
          message: "Reconhecido: " + user.name,
          user,
        });
      } else {
        return res.status(404).json({
          error: true,
          message: "Nao reconhecido",
        });
      }
    })
    .catch(() => {
      return res.status(500).json({
        error: true,
        message: "Erro ao logar!!",
      });
    });
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  let reqs = await User.create({
    name: req.body.nameUser,
    password: req.body.passwordUser,
    email: req.body.emailUser,
    balance: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then((user) => {
      res.send(
        JSON.stringify("O usuário foi cadastrado com sucesso! Volte a Home")
      );
    })
    .catch(() => {
      res.send(JSON.stringify("Email já em uso!!"));
    });
});

//Start server
// let port = process.env.PORT || 8080;
// app.listen(port, (req, res) => {
//   console.log("Servidor Rodando");
// });

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
