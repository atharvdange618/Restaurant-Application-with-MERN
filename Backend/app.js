// Importing required modules and dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

// Configuring the Express application
const app = express();

// Loading environment variables from config file
dotenv.config({ path: './config/config.env' });

// Setting up CORS to allow requests from the frontend
app.use(cors({
    origin: [process.env.FRONTEND_URL], // Allowing only the frontend URL specified in environment variables
    methods: ["POST"], // Restricting allowed HTTP methods to POST
    credentials: true // Allowing cookies to be included in cross-origin requests
}));

// Parsing incoming JSON requests and URL-encoded data
app.use(express.json()); // Parsing JSON payloads
app.use(express.urlencoded({ extended: true })); // Parsing URL-encoded data with extended query string support

// Establishing database connection
dbConnection();

// Error Handler setup
app.use(errorMiddleware)
app.use('/api/v1/reservation', reservationRouter)

// Exporting the configured Express application
export default app;