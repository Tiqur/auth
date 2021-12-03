import express from 'express';
import { RegisterRouter, LoginRouter } from './routes/index';
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/register', RegisterRouter);
app.use('/login', LoginRouter);

app.listen(3000, () => {
  console.log(`Listening on port ${PORT}`);
});
