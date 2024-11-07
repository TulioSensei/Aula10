const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// criando objeto
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "mysqlfatec",
    database: 'aulabd'
});

//conctando ao banco
db.connect((erro) => {
    if (erro)
        console.error("Erro ao conectar ao MySQL: ", erro);
    else
        console.log("Conectado ao MySQL conectado com sucesso!");
});