"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const database_1 = require("./services/database");
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
dotenv_1.default.config();
//Port
const desiredPort = process.env.PORT || 88;
app.listen(desiredPort, () => {
    console.log(`server listening in port ${desiredPort}`);
});
// Conectar a la base de datos
(0, database_1.connectToDatabase)();
