import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';

connectDB();

import express from 'express';
const port = process.env.PORT || 5000;
const app = express();
import productRoutes from './routes/productRoutes.js';
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
