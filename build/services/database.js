"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar variables de entorno
dotenv_1.default.config();
// Crear conexión a MySQL
const DatabaseConnection = mysql2_1.default.createConnection({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB,
    port: Number(process.env.MYSQL_ADDON_PORT) || 3306,
    connectTimeout: 10000,
});
// Conectar a la base de datos
const connectToDatabase = () => {
    DatabaseConnection.connect((err) => {
        if (err) {
            console.error("Error connecting to the database:", err.message);
            process.exit(1); // Detiene el servidor si no se puede conectar
        }
        console.log("Connected to the MySQL database!");
    });
};
exports.connectToDatabase = connectToDatabase;
exports.default = DatabaseConnection;
