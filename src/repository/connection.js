import mysql from 'mysql2/promise';

let conn = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB
})

console.log("Conexão com CineSousaDB realizada!");
export default conn;