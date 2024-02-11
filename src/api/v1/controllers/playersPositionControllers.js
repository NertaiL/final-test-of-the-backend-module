import {
  obtainingPlayerPosition,
  obtainingPlayerPositionsByTeam,
  creatingTeam
} from "../models/playerPositionModels.js";
import { findError } from "../utils/utils.js";

//get all players with their positions and team respective
export const getAllPlayerPosition = async (req, res) => {
  try {
    const playerPositionObtained = await obtainingPlayerPosition();
    res.status(200).json({ playerPositionObtained });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

//get search by team, player and position
export const getAllPlayerPositionByTeam = async (req, res) => {
  try {
    const { teamID } = req.params;
    const playerPositionsByTeamObtained = await obtainingPlayerPositionsByTeam(
      teamID
    );
    res.status(200).json({ playerPositionsByTeamObtained });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

//post 
export const createPlayersPositionsByTeam = async (req,res) => {
try {
    const {teamID} = req.params;
   /*  console.log(teamID); */
    const {name, positions_id} = req.body.players
    console.log(name);
    const createdTeam = await creatingTeam(teamID,{name,positions_id})
    res.status(201).json({createdTeam})
} catch (error) {
    console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
}
}
