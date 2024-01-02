import express from 'express';
import { userroute } from './userRouter';



const router = express.Router();

export default () : express.Router=> {
    userroute(router);
    return router;
}