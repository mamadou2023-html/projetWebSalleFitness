import { Router } from "express";
import { addSuiviPro, listSuiviPro, removeSuiviPro, updateSuiviPro } from "../controllers/contro_suiviProgre.js";
const routerSuiviPro = Router()
routerSuiviPro
    .post('/',addSuiviPro)
    .get('/',listSuiviPro)
    .delete('/:id_progression',removeSuiviPro)
    .put('/:id_progression',updateSuiviPro)
export default routerSuiviPro