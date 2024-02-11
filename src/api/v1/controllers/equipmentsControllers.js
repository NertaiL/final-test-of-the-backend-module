import { gettingEquipment, creatingTeam } from "../models/equipmentModels.js";
import { findError } from "../utils/utils.js";

//get all
export const getAllEquipments = async (req, res) => {
  try {
    const equipmentsObtained = await gettingEquipment();
    res.status(200).json({ equipmentsObtained });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
    p;
  }
};

//post
export const createEquipments = async (req, res) => {
  try {
    const { equipments } = req.body;
    const ready_team = await creatingTeam(equipments);
    res.status(201).json({ ready_team });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};
