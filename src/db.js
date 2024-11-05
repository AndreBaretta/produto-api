require("dotenv").config();
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");

const pool = new Pool({
   user: process.env.PGUSER,
   password: process.env.PGPASSWORD,
   host: process.env.PGHOST,
   database: process.env.PGDATABASE,
   port: process.env.PGPORT,
});

const runScript = async (filepath) => {
   const script = fs.readFileSync(path.join(__dirname, filepath)).toString();
   try {
      await pool.query(script);
      console.log("Funcionou");
   } catch (error) {
      console.error("Erro no script:", error.message);
   }
};

const runScripts = async () => {
   await runScript("scripts/create_db.sql");
   await runScript("scripts/povoate_db.sql");
};

runScripts();

module.exports = { pool };
