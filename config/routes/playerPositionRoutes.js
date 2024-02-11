import  express  from "express";
import { getAllPlayerPosition , getAllPlayerPositionByTeam , createPlayersPositionsByTeam } from "../../src/api/v1/controllers/playersPositionControllers.js";
import { verifyTokenToAuthorize } from "../../middlewares/verifyToken.js";

const router = express.Router ()

router.get("/equipments/players/position", getAllPlayerPosition)

router.get("/equipments/:teamID/players", getAllPlayerPositionByTeam) 
router.post("/equipments/:teamID/players",verifyTokenToAuthorize ,createPlayersPositionsByTeam )

export default router