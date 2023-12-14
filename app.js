const express = require("express");
const app = express();
const db = require("./db/connection");
//porta
const PORT = 4000;

app.listen(PORT, function () {
  console.log("express esta rodando na PORT 3000");
});
//db conection
db.authenticate()
  .then(() => {
    console.log("conectou ao banco com sucesso ");
  })
  .catch(err => {
    console.log("ocorreu um erro ao conectar", err);
  });

//rotas
app.get("/", (req, res) => {
  res.send("esta funcioanando tudo ok");
});
