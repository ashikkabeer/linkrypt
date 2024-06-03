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
app.use(session());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
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
