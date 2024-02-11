import { findError } from "../src/api/v1/utils/utils.js";
import  jwt  from "jsonwebtoken";

export const verifyTokenToAuthorize = async (req,res,next) => {
    try {
        validateHeaders(req, res);
        const token = req.header("authorization").split(" ")[1]; //tambien podria ser asi const token = req.headers.authorization.split(" ")[1]
        const tokenData = await validateToken(token)
        req.user = tokenData
        next()
    } catch (error) {
        const errorFound = findError(error.code);
        return res
          .status(errorFound[0]?.status)
          .json({ error: errorFound[0]?.message });
    }
};

const validateToken = async (token) => {//aca llega el token  y aplicamos el jwt.verify le pasamos el token parametrizado y la firma que tenemos guardada en nuestro .env
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded; // y retorno el token decodificado
    } catch (err) {
      throw createError("auth_04", "Token no válido");
    }
  };

const validateHeaders = (req) => { //le pasamos el req
    if (!req.header("Authorization")) {//si no tiene la authorization entonces 
      throw createError("auth_03", "token no encontrado");//le tiramos un error que el token no ha sido encontrado
    }
  };

const createError = (code, message) => { //aqui cree una funcion de errores para poder ocupar el codigo auth_03 etc.
    const error = new Error(message);
    error.code = code;
    return error;
  };
  
  