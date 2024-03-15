import { Sequelize } from "sequelize";
import { contenu_media } from "../models/relation.js";
// ajout d'un abonnement------------------------------------
export const addContenu = async(req, res ) =>{
    const newContenu =req.body
    try {
        await contenu_media.create(newContenu)
        res.status(201).json({ message: "  Ajout avec succés !" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}
// listes des abonnemnets---------------------------------
export const listContenu =async (req, res) =>{
    const lesContenus= await contenu_media.findAll()
  res.status(200).json(lesContenus)
      
}
// mise à jour des contenus----------------------------------
export const updateContenu = async( req, res) =>{
    const { id_contenu_media } = req.params
    if(!parseInt(id_contenu_media))  return res.json(" Ce contenu multi-media n'existe pas !")
    const ContenuModif = contenu_media.findByPk(id_contenu_media)
    // nouveau contenu qui remplera l'ancien---------------------
    const newContenu =req.body
    try {
        await ContenuModif.update(newContenu)
        res.status(201).json({message: "Contnu multi-media  mise à jour avec succés"})
    }
    catch (error) {
        res.status(400).json({ message: error.message + "ici" })
    }}
    //Suppression d'un contenu--------------------------------------
export const removeContenu = async (req, res) => {
    const { id_contenu_media} = req.params
    try {
        res.status(200).json({ message: ` Contnu multi-media à été supprimé avec succes` })
        await contenu_media.destroy({ where: { id_contenu_media} })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}