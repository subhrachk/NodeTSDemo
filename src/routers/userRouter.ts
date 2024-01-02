import { getallusers, getuserbyid } from '../controllers/UserController';
import express from 'express';

export const userroute = (router : express.Router) => {
    router.get('/users',getallusers);
    router.get('/users/:id',getuserbyid);
}