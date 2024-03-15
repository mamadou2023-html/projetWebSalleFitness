import {role} from "../models/relation.js";
// ajout d'un Role-----------------------------------
export const addRole = async(req, res ) =>{
    const newRole =req.body
    try {
        await role.create(newRole)
        res.status(201).json({ message: "  Ajout avec succés !" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}
// listes des Roles--------------------------------
export const listRole =async (req, res) =>{
    const lesRoles= await role.findAll()
  res.status(200).json(lesRoles)
      
}
// mise à jour des Roles-----------------------------------
export const updateRoles = async( req, res) =>{
    //L'information actuelle
    const { id_role } = req.params
    //Validation de l'id
    if (!parseInt(id_role)) return res.status(404).json({ message: "Cet role n'existe pas" })
    const rolemodif = await role.findByPk(id_role)
    //Nouvelle information
    const newRole = req.body
    try {
        await rolemodif .update(newRole)
        res.status(201).json({ message: "Role mise à jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + " ici" })
    }
}
    //Suppression d'un programme--------------------------------------
export const removeRole = async (req, res) => {
    const { id_role } = req.params
    try {
        res.status(200).json({ message: ` Le role à été supprimé avec succes` })
        await role.destroy({ where: { id_role} })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}