import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import errorHandler from './middlewares/errorHandler.js';

import userRoutes from './routes/users.router.js';
import petRoutes from './routes/pets.router.js';
import adoptionRoutes from './routes/adoption.router.js';
import sessionRoutes from './routes/sessions.router.js';
import mockRoutes from './routes/mocks.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  logger.error('MongoDB URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => logger.info(' Connected to MongoDB'))
  .catch(err => {
    logger.error(' MongoDB connection error:', err);
    process.exit(1);
  });


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoptions', adoptionRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/mocks', mockRoutes);


app.use(errorHandler);


app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
});
