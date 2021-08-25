import express from 'express';
import mongoose from 'mongoose';
import verifyAccess from './middleware/authMiddleware';
import authRouter from './routes/authRoutes';

const app = express();

app.use(express.json());

mongoose
  .connect('mongodb://127.0.0.1:27017/dev3801', {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running.');
    });
  });

app.get('/', verifyAccess, (req, res) => {
  res.send('Hello World!');
});

app.use(authRouter);
