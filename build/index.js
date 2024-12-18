"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
// Middlewares
app.use(express_1.default.json());
dotenv_1.default.config();
//Port
const desiredPort = process.env.PORT || 88;
app.listen(desiredPort, () => {
    console.log(`server listening in port ${desiredPort}`);
});
const Customer = prisma.customer.create({
    data: {
        firstName: 'Yoderick',
        lastName: 'Montero',
        email: 'elsa@prisma.io',
        phone: '809-334-3635',
        Orders: {
            create: [
                {
                    status: 'First order',
                    total_amount: 100.50,
                },
                {
                    status: 'Second order',
                    total_amount: 200.75,
                },
            ],
        },
    },
});
const C = prisma.customer.findMany();
console.log(C);
console.log(Customer);
