import { Sequelize } from "sequelize";
import {programme} from "../models/relation.js";
import { validationResult } from "express-validator";
// ajout d'un Programme------------------------------------
export const addProgramme = async(req, res ) =>{
      //Recuperation des resultats de la validation 
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
      }
    const newProgramme =req.body
    try {
        await programme.create(newProgramme)
        res.status(201).json({ message: "  Ajout avec succés !" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}
// listes des programme---------------------------------
export const listProgramme =async (req, res) =>{
    const lesProgrammes = await programme.findAll()
  res.status(200).json(lesProgrammes)
      
}
// mise à jour des Programmes-----------------------------------
export const updateProgramme = async( req, res) =>{
    //L'information actuelle
    const { id_programme } = req.params
    //Validation de l'id
    if (!parseInt(id_programme)) return res.status(404).json({ message: "Ce programme n'existe pas" })
    const programmemodif = await programme.findByPk(id_programme)
    //Nouvelle information
    const newProgramme = req.body
    try {
        await programmemodif .update(newProgramme)
        res.status(201).json({ message: "Programme mise à jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + " ici" })
    }
}
    //Suppression d'un programme--------------------------------------
export const removeProgramme = async (req, res) => {
    const { id_programme } = req.params
    try {
        res.status(200).json({ message: ` Le programme à été supprimé avec succes` })
        await programme.destroy({ where: { id_programme} })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}