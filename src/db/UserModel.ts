import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username : {type : String, require : true},
    email : {type : String, require : true},
    authentication : {
        salt : {type : String, require : true, select : false},
        password : {type : String, require : true, select : false},
        sessionToken : {type : String, select : false},
    }
});


export const UserModel = mongoose.model('users',UserSchema);

export const getAllUsers = () => UserModel.find();
export const getUserById = (id : string) => UserModel.findById(id);
export const getUserByEmail = (email : string) => UserModel.findOne({email : email});