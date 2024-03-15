import { Router } from "express";
//Importer les controllers pour la creation des routes
import { addUtilisateur, listUtilisateurs, removeUtilisateur, updateUtilisateur } from "../controllers/contro_utilisateur.js";
//Importer les regles de validations
import utililisateurRules from "../validation/validationUtilisateur.js";

import { verifierToken } from "../authentification/token_vericate.js";
import autoriser from "../authentification/authorisation.js";
import loginRules from "../validation/loginValidation.js";
const router = Router()
router
    .post('/',verifierToken,autoriser(["professeur"]),utililisateurRules, addUtilisateur)
    .get('/',  listUtilisateurs)
    .put('/:id_utilisateur',verifierToken,utililisateurRules, updateUtilisateur)
    .delete("/:id_utilisateur",verifierToken,removeUtilisateur)
export default router