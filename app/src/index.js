const express = require("express");
const { createConnection } = require("mysql");

const connection = createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "desafio",
});

connection.connect(() => {
  connection.query(`
    CREATE TABLE IF NOT EXISTS PEOPLE(
        ID INT NOT NULL AUTO_INCREMENT, 
        NAME VARCHAR(30) NOT NULL,
        PRIMARY KEY (ID)
    )`);
});

const app = express();

app.get("/", async (req, res) => {
  connection.query(
    `INSERT INTO PEOPLE (name) VALUES ("Aluno Full Cycle")`,
    (err, results, _) => {
      connection.query(`SELECT * FROM PEOPLE`, (err, results, _) => {
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            ${results.map(({ NAME }) => {
              return `- ${NAME}<br/>`;
            }).join("")}
            `);
      });
    }
  );
});

app.listen(3000);
