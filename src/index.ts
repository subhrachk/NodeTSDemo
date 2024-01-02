import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import http from 'http';
import router from './routers';
import mongoose from 'mongoose';

const app = express();

app.use(cors({credentials : true}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3100,()=>console.log("Server Started at 3100"));

app.use('/',router());

const MONGO_URL = "mongodb://subhra:Subhra$123@127.0.0.1:27017/NodeTsDemo";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(err : Error) => console.log(err.message))
