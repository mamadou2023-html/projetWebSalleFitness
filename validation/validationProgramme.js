import { body, param } from "express-validator";

//Regex pour le nom du programme
const nameRegex =/^[a-zA-Z0-9_-]{2,16}$/ 

const programmeRules = [
    body('nom').matches(nameRegex).withMessage("le nom du programme n'est pas conforme"),
    body('type_progarmme').isString().isLength({ min: 2}).withMessage('au moins 2 caracteres') ,
    body('duree').optional().isFloat({ min: 0.1 }).withMessage("la durée doit etre un float"),
    body('pogrammeIdProgramme').optional().isInt({ min: 1 }).withMessage("l'id doit etre un entier positif"),
    body('description').optional().isString().isLength({min:10}).withMessage("la descriptiondoit au moins contenir 10 caractéres")
]

export default programmeRules