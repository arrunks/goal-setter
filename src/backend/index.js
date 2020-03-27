require('dotenv').config();

import express, { Router } from 'express';
import logger from 'morgan';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
const path = require('path');

const app = express();
const router = Router();

const environment = process.env.NODE_ENV;
import stage from './config';

import routes from './routes/index.js';


app.use(cors());
app.use(json());
app.use(urlencoded({
    extended:true
}));
app.use(json({ type: 'application/*+json' }))
if (environment !== 'production') {
    app.use(logger('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/v1', routes(router));
app.use('/',(req,res) => res.sendFile(__dirname+'/public/index.html'));
app.listen(`${stage[environment].port}`, () => {
    console.log(`server now listening at  localhost:${stage[environment].port}`)
})

export default app;