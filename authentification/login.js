import { utilisateur} from "../models/relation.js";

//Importer le module de hachage
import bcrypt from 'bcryptjs'

//Importer le module qui genere la clef
import jwt from 'jsonwebtoken'

//Ajouter les validations
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    
    //Recuperation des resultats de la validation 
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    //Les informations de connexion

    const { email, mot_passe } = req.body

    //Verification de l'email
    if (!email) return res.status(404).json({ message: "L'email est incorrect" })

    //Chercher la personne dans la base de donnees

    try {
        const user = await utilisateur.findOne({ where: { email } })

        //Verifier la presence de cette personne dans la base de donnees
        if (!user) return res.status(404).json({ message: "La personne n'existe pas!" })
        //Verification du mot de passe

        const mdpCorrect = bcrypt.compareSync(mot_passe, user.mot_passe)

        if (!mdpCorrect) return res.status(401).json({ message: "Mot de passe incorrect" })

        //Creation de la clef d'access
        const payload = { id: utilisateur.id_utilisateur }
        const token = jwt.sign(payload, process.env.SECRET_KEY)
        res.status(200).json({ message:"vous etes en ligne M/Mme avec les informations suivantes:",data: user, token })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}