import { findError } from "../utils/utils.js";
import { obtainingPlayers, creatingPlayer } from "../models/playerModels.js";

//get all
export const getAllPlayers = async (req, res) => {
  try {
    const playersObtained = await obtainingPlayers();
    res.status(200).json({ playersObtained });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

//post
export const createPlayers = async (req, res) => {
  try {
    const { players } = req.body;
    const playersCreated = await creatingPlayer(players);
    res.status(201).json({ playersCreated });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};
