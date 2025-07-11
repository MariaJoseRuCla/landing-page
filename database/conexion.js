import mysql from 'mysql2/promise';

const conexion = await mysql.createConnection({
  host: "localhost",
  port: 3307,
  database: "opiniones",
  user: "root",
  password: ""
});

console.log("Conexión exitosa");

export default conexion;
