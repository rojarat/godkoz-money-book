import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import passport from 'passport';
import connectDatabase from './utils/connectDatabase';
import initPassportStrategy from 'src/utils/passport';

import APIV1 from './routes/v1';

const app = express();

connectDatabase();

// todo add mongoose
app.use(helmet());
app.use(
  cors({
    // todo ใส่ whitelist
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  })
);
app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

initPassportStrategy(passport);

app.use('/api/v1', APIV1);

app.get('/', (req, res) => {
  return res.send('hi, running on port ' + process.env.PORT || '');
});

app.listen(process.env.PORT, () => {
  console.log(`listening port: ${process.env.PORT}`);
});

export default app;
