import  jwt  from "jsonwebtoken";
import { findError } from "../utils/utils.js";

const admin = {
    username : "admin",
    password : "1234"
};

export const loginUser = async (req,res) =>{
    try {
        const {username, password} = req.body;

        if (username === admin.username && password === admin.password) {
            const token = jwt.sign({ username: admin.username }, process.env.JWT_SECRET, {
                expiresIn: "15m" 
            });
            
            return res.status(200).send({ token });
        }
    
        return res.status(400).send({ error: "User and password is obligation" });
    } catch (error) {
        const errorFound = findError(error.code)
        return res.status(errorFound[0].status).json({error: errorFound[0].message})
    }
};