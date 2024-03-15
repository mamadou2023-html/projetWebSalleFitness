import { Router } from "express";
import { addEquipement, listEquipement, removeEquipement, updateEquipement} from "../controllers/contro_equipement.js";
const routerEquipement = Router()
routerEquipement
    .post('/',addEquipement)
    .get('/',listEquipement)
    .delete('/:id_equipement',removeEquipement)
    .put('/:id_equipement',updateEquipement)
export default routerEquipement