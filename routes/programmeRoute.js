import { Router } from "express";
import { addProgramme, listProgramme, removeProgramme, updateProgramme } from "../controllers/contro_programme.js";
import programmeRules from "../validation/validationProgramme.js";
import { verifierToken } from "../authentification/token_vericate.js";
import autoriser from "../authentification/authorisation.js";
const routerProgramme = Router()
routerProgramme
    .post('/',verifierToken,autoriser(["professeur"]),programmeRules,addProgramme)
    .get('/',listProgramme)
    .delete('/:id_programme',removeProgramme)
    .put('/:id_programme',updateProgramme)
export default routerProgramme