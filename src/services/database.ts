import mysql, { Connection } from "mysql2";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Crear conexión a MySQL
const DatabaseConnection: Connection = mysql.createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
  port: Number(process.env.MYSQL_ADDON_PORT) || 3306,
   connectTimeout: 10000,
});

// Conectar a la base de datos
export const connectToDatabase = () => {
  DatabaseConnection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err.message);
      process.exit(1); // Detiene el servidor si no se puede conectar
    }
    console.log("Connected to the MySQL database!");
  });
};

export default DatabaseConnection;
