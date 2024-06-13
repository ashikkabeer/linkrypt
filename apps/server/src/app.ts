import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import session from 'express-session';
import * as middlewares from './middlewares';
import MessageResponse from './interfaces/MessageResponse';
import indexRouter from './routes/index';
require('dotenv').config();

const app = express();
app.use(session({
  secret: 'change this later',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
}));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors(
  {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
));
app.use(express.json());

app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'api endpoint is /api/v1',
  });
});

app.use('/api/v1', indexRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


export default app;
