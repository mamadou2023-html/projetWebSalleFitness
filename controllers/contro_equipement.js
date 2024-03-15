import { Sequelize } from "sequelize";
import {  equipement } from "../models/relation.js";
// ajout d'un abonnement------------------------------------
export const addEquipement = async(req, res ) =>{
    const newEquipement =req.body
    try {
        await equipement.create(newEquipement)
        res.status(201).json({ message: "  Ajout avec succés !" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}
// listes des equipements---------------------------------
export const listEquipement =async (req, res) =>{
    const lesEquipements = await  equipement.findAll()
  res.status(200).json(lesEquipements)
      
}
// mise à jour desEquipemnts-----------------------------------
export const updateEquipement = async( req, res) =>{
   //L'information actuelle
   const { id_equipement } = req.params
   //Validation de l'id
   if (!parseInt(id_equipement)) return res.status(404).json({ message: "Cet equipement n'existe pas" })
   const equipementmodif = await equipement.findByPk(id_equipement)
   //Nouvelle information
   const newEquipement = req.body
   try {
       await equipementmodif .update(newEquipement)
       res.status(201).json({ message: "Equipement mise à jour avec success" })

   } catch (error) {
       res.status(400).json({ message: error.message + " ici" })
   }
}
    //Suppression d'un abonnement--------------------------------------
export const removeEquipement = async (req, res) => {
    const { id_equipement } = req.params
    try {
        res.status(200).json({ message: ` L'equipement à été supprimé avec succes` })
        await equipement.destroy({ where: { id_equipement} })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}