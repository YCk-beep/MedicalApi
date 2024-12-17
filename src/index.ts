import dotenv from 'dotenv';
import express from 'express';
import { connectToDatabase } from "./services/database";
const app = express();


// Middlewares
app.use(express.json());
dotenv.config();


//Port
const desiredPort = process.env.PORT || 88;
app.listen(desiredPort, () => {
    console.log(`server listening in port ${desiredPort}`);
});



// Conectar a la base de datos
connectToDatabase();