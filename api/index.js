import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()
connectDB();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Api is running !!')
})

app.use('/api/user', userRoutes)
app.use("/api/chat", chatRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(5000, console.log("Server started at 5000"));