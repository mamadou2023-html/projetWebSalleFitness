import { body, param } from "express-validator";

//Regex pour le nom et prenom
const nameRegex =/^[a-zA-Z0-9_-]{2,16}$/ // /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

//On peut aussi utiliser une regex pour le mot de passe
//const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

const utililisateurRules = [
    body('nom').matches(nameRegex).withMessage("le nom n'est pas conforme"),
    body('prenom').matches(nameRegex).withMessage("le prenom n'est pas conforme"),
    body('email').exists().withMessage('email obligatoire').isEmail().withMessage("ceci n'est pas un email"),
    body('mot_passe').isString()
        .isLength({ min: 8 }).withMessage('au moins 8 caracteres')
        .matches(/\d/).withMessage('au moins un chiffre')
        .matches(/[a-z]/).withMessage('au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('au moins un caractere special'),
    body('naissance').isISO8601().withMessage('la date est incorrecte'),
    body('suiviProgessionIdProgression').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    body('pogrammeIdProgramme').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    param('id_utlisateur').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif")
]

export default utililisateurRules