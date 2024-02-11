import  express  from "express";
import { getAllEquipments ,createEquipments} from "../../src/api/v1/controllers/equipmentsControllers.js";
import { verifyTokenToAuthorize } from "../../middlewares/verifyToken.js";

const router = express.Router()

router.get("/equipments",getAllEquipments)
router.post("/equipments",verifyTokenToAuthorize,createEquipments)

export default router