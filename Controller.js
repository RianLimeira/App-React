//Constantes
const express = require("express");
const session = require('express-session');
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/index.js");
const user = require("./models/user.js");
const pokemon = require("./models/pokemon.js");
const AsyncStorage = require("@react-native-async-storage/async-storage");

const User = db.User;
const Pokemon = db.Pokemon;

const PORT = process.env.PORT || 8080;

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use(
  session({
    secret: 'secreto', // Uma string de segredo usada para assinar o cookie da sessão
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/users", (req, res) => {
  try {
    const user = req.session.user;

    if (user) {
      return res.status(200).json({
        error: false,
        message: 'ok',
        username: user.name,
        user
      });
    } else {
      return res.status(401).json({
        error: true,
        message: "Usuário não autenticado"
      });
    }
  } catch (error) {
    console.error('Erro ao processar a rota /getUsername:', error);
    return res.status(500).json({
      error: true,
      message: "Erro interno do servidor"
    });
  }
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
        req.session.user = user;
        
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

// app.post("/logout", function (req, res, next) {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });

app.post("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.error("Erro ao fazer logout :", err);
        return res.status(500).json({
          error: true,
          message: "Erro ao fazer logout",
        });
      } else {
        res.clearCookie('connect.sid'); // Limpar o cookie da sessão
        console.log("Sessão encerrada com sucesso.");

        return res.status(200).json({
          error: false,
          message: "Logout com sucesso",
        });
      }
    });
  } else {
    console.error("Sessão não inicializada.");
    return res.status(400).json({
      error: true,
      message: "Session não iniciada",
    });
  }
});

// app.post("/logout", (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       console.error("Erro ao encerrar a sessão:", err);
//       return res.status(500).json({
//         error: true,
//         message: "Error closing session",
//       });
//     } else {
//       console.log("Sessão encerrada com sucesso.");
//       return res.status(200).json({
//         error: false,
//         message: "Logout successful",
//       });
//     }
//   });
// });

app.post("/create", async (req, res) => {
  console.log(req.body);
  let reqs = await User.create({
    name: req.body.nameUser,
    password: req.body.passwordUser,
    email: req.body.emailUser,
    balance: 1000,
    // createdAt: new Date(),
    // updatedAt: new Date(),
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

app.post("/pokemon/create", async (req, res) => {
  console.log(req.body);
  let reqs = await Pokemon.create({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    userId: req.body.userId,
  })
    .then(() => {
      console.log("Registrado");
      res.send(JSON.stringify("Capturado com sucesso"));
    })
    .catch((err) => {
      console.error(err);
      res.send(JSON.stringify("Houve um problema de conexão!"));
    });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
