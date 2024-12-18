import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from '@prisma/client';
const app = express();
const prisma = new PrismaClient();

// Middlewares
app.use(express.json());
dotenv.config();


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
  
  const C = prisma.customer.findMany()
  console.log(C);
  
  console.log(Customer);
  

