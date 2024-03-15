import { Sequelize } from "sequelize";
import { abonnement } from "../models/relation.js";
export const addAbonnement = async(req, res ) =>{
    const newAbonnement =req.body
    try {
        await abonnement.create(newAbonnement)
        res.status(201).json({ message: "  Ajout avec succés !" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}
// listes des abonnemnets---------------------------------
export const listAbonnement =async (req, res) =>{
    const lesAbonnements = await abonnement.findAll()
  res.status(200).json(lesAbonnements)
      
}
// mise à jour des abonnements-----------------------------------
export const updateAbonnement = async( req, res) =>{
  //L'information actuelle
  const { id_abonnement } = req.params
  //Validation de l'id
  if (!parseInt(id_abonnement)) return res.status(404).json({ message: "Cet abonnement n'existe pas" })
  const abonnementmodif = await abonnement.findByPk(id_abonnement)
  //Nouvelle information
  const newAbonnement = req.body
  try {
      await abonnementmodif .update(newAbonnement)
      res.status(201).json({ message: "Abonnement mise à jour avec success" })

  } catch (error) {
      res.status(400).json({ message: error.message + " ici" })
  }
}
    //Suppression d'un abonnement--------------------------------------
export const removeAbonnement = async (req, res) => {
    const { id_abonnement } = req.params
    try {
        res.status(200).json({ message: ` L'abonnement à été supprimé avec succes` })
        await abonnement.destroy({ where: { id_abonnement} })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}