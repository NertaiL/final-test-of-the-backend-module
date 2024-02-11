import  express  from "express";
import { getAllPlayers , createPlayers } from "../../src/api/v1/controllers/playersControllers.js";
import { verifyTokenToAuthorize } from "../../middlewares/verifyToken.js";
const router = express.Router()


//opcional otra forma de hacerlo , ingresando manual las positions y equipments
router.get("/players", getAllPlayers)
router.post("/players",verifyTokenToAuthorize,createPlayers)

export default router