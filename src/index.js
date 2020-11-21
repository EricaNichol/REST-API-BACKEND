import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import routes from './routes';
// Models
import models from './models';
const app = express();
// Var

app.use(cors());
app.use((req, res, next) => {
  req.context = models;
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
// routes
app.use('/users', routes.user);
app.use('/id', routes.id);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
