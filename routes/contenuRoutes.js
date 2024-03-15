import { Router } from "express";
import { addContenu,listContenu,updateContenu,removeContenu} from "../controllers/contro_ContenuMedia.js";
const routerContenu = Router()
routerContenu
    .post('/',addContenu)
    .get('/',listContenu)
    .put('/:id_conetnu_media',updateContenu)
    .delete("/:id_contenu_media",removeContenu)
export default routerContenu