import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express()
import cors from 'cors';

//! UserRoutes
import userRoutes from "./routes/userRoutes.js"

//! WalletRoutes
import walletRoutes from "./routes/walletRoutes.js"

import connectDB from './config/db.js';

// Middlewares
import { notFound, errorHandler} from './middleware/errorMiddleware.js'

connectDB()
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/wallet', walletRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = 4300

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
