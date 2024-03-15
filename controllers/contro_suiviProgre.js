import { Sequelize } from "sequelize";
import {suivi_progresssion} from "../models/relation.js";
// ajout d'un suivi de progression------------------------------------
export const addSuiviPro = async(req, res ) =>{
    const newSuiviPro =req.body
    try {
        await suivi_progresssion.create(newSuiviPro)
        res.status(201).json({ message: "  Ajout avec succés !" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}
// listes des suivis---------------------------------
export const listSuiviPro =async (req, res) =>{
    const lesSuiviPro = await suivi_progresssion.findAll()
  res.status(200).json(lesSuiviPro)
      
}
// mise à jour de suivi de progression-----------------------------------
export const updateSuiviPro = async( req, res) =>{
     //L'information actuelle
     const { id_progression } = req.params
     //Validation de l'id
     if (!parseInt(id_progression)) return res.status(404).json({ message: "Ce suivi de progression n'existe pas" })
     const suivi_progressionmodif = await suivi_progresssion.findByPk(id_progression)
     //Nouvelle information
     const newSuivi_progression = req.body
     try {
         await suivi_progressionmodif .update(newSuivi_progression)
         res.status(201).json({ message: "Suivi de progression mise à jour avec success" })
 
     } catch (error) {
         res.status(400).json({ message: error.message + " ici" })
     }
}
    //Suppression d'un suivi de progression--------------------------------------
export const removeSuiviPro = async (req, res) => {
    const { id_progression } = req.params
    try {
        res.status(200).json({ message: ` Le suivi de progression à été supprimé avec succes` })
        await suivi_progresssion.destroy({ where: { id_progression} })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}