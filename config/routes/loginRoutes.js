import  express  from "express";
import { loginUser } from "../../src/api/v1/controllers/loginControllers.js";
import { validateParamsLogin } from "../../middlewares/validateParamsLogin.js";
const router = express.Router()

router.post("/auth",validateParamsLogin, loginUser)

export default router;