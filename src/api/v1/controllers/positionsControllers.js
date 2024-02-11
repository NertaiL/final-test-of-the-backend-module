import { obtainingPosition,positionCreating } from "../models/positionModels.js";
import { findError } from "../utils/utils.js";

//get all
export const getAllPositions = async (req,res) => {
    try {
        const positionObtained = await obtainingPosition()
        res.status(200).json({positionObtained})
    } catch (error) {
        const errorFound = findError(error.code)
        return res.status(errorFound[0].status).json({error: errorFound[0].message})
    }

}

//post
export const createPositions = async (req,res) => {
    try {
        const {positions} = req.body
        const positionCreated = await positionCreating(positions)
        res.status(201).json({positionCreated})
    } catch (error) {
        const errorFound = findError(error.code)
        return res.status(errorFound[0].status).json({error: errorFound[0].message})
    }
}