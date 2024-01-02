import express from 'express';
import { getAllUsers, getUserById } from '../db/UserModel';

export const getallusers = async (req : express.Request, res : express.Response) => {
    try {
        const allusers = await getAllUsers();
        if (allusers) {
            return res.status(200).json({Users : allusers}).end();
        }
        return res.status(202).json({Message : "No User Found"}).end();
    }
    catch(error) {
        return res.sendStatus(404);
    }
}


export const getuserbyid = async (req : express.Request, res : express.Response) => {
    try {
        const id : string = req.params['id'];
        const user = await getUserById(id);
        console.log('user : ',user);
        if (user) {
            return res.status(200).json({User : user}).end();
        }
        return res.status(202).json({Message : "No User Found"}).end();
    }
    catch(error) {
        return res.sendStatus(404);
    }
}