import { faker } from "@faker-js/faker";
import jwt from "jsonwebtoken";

export const generateToken = () => {
    const adminUsername = "admin"
    const token = jwt.sign({username: adminUsername}, process.env.JWT_SECRET,{
        expiresIn: "5m"
    })
    return token
}