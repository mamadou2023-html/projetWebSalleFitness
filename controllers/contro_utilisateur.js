// importer le module de hachage-------------------
import { Sequelize } from "sequelize"
import {utilisateur} from "../models/relation.js"
//Importer le module de hachage
import bcrypt from 'bcryptjs'

//Validation
import { validationResult } from "express-validator";
// ajout d'un utilisateur-------------------------------------
export const addUtilisateur = async(req, res ) =>{
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
    }
    //Masquer le mot de passe
   let { nom, prenom, naissance,email,mot_passe,photo,suiviProgressionIdProgression, pogrammeIdProgramme	} = req.body

    //Hachage du mot de passe
    const mdpHache = bcrypt.hashSync(mot_passe, 8)
    mot_passe =mdpHache
    const newUtilisateur = { nom, prenom, naissance,email,mot_passe,photo,suiviProgressionIdProgression, pogrammeIdProgramme	} 
    //const newUtilisateur =req.body
    try {
        await utilisateur.create(newUtilisateur)
        res.status(201).json({ message: newUtilisateur.prenom + " " +newUtilisateur.nom +"  a été ajouté avec succés !" })
    } catch (error) {
        res.status(201).json({ message: error.message })
    }
}
// listes dees utilisateurs--------------------------------------
export const listUtilisateurs = async (req, res) =>{
    const listeUtilisateurs =await utilisateur.findAll()
   // res.json( " ---------------liste des utilisateurs: " + {data:listeUtilisateurs})
   res.status(200).json(listeUtilisateurs )
  

}
// mise à jour des utilisateurs
export const updateUtilisateur= async (req, res) => {
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
    }
    //L'information actuelle
    const { id_utilisateur } = req.params
    //Validation de l'id
    if (!parseInt(id_utilisateur)) return res.status(404).json({ message: "Cet utilisateur n'existe pas" })
    const utilisateurmodif = await utilisateur.findByPk(id_utilisateur)
    //Nouvelle information
    const newUtilisateur = req.body
    try {
        await utilisateurmodif .update(newUtilisateur)
        res.status(201).json({ message: "Utilisateur mise à jour avec success" })

    } catch (error) {
        res.status(400).json({ message: error.message + " ici" })
    }

}
//Suppression d'un utilisateur
export const removeUtilisateur = async (req, res) => {
    const { id_utilisateur } = req.params
    try {
        await utilisateur.destroy({ where: { id_utilisateur } })
        res.status(200).json({ message: "L'utilisateur supprime avec succes" })
    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}