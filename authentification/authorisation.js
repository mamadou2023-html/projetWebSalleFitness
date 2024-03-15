//Importer le modele utilisateur
import { utilisateur } from '../models/relation.js'

const autoriser = roles => async (req, res, next) => {
    //Recuperer l'id a partir de la req
    const id_utilisateur = req.id_utilisateur

    //Chercher la personne dans la base de donnees
    try {
        const utilisateurAuto = await utilisateur.findByPk(id_utilisateur)
        if (!utilisateurAuto) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" })
        //Recuperer le role de la personne 
        const role = await utilisateurAuto.getrole()

        if(!role) return res.status(403).json({ message: "Pas autorise a voir cette route !!" })

        if (roles?.includes(role.titre.toLowerCase())) {
            next()
            return
        } else {
            return res.status(403).json({ message: "Vous n'etes pas autorises..." })
        }


    } catch (error) {
        res.status(403).json({ message: error.message })
    }

}

export default autoriser