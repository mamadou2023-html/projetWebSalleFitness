import { Router } from "express";
import { addAlimentation, listAlimentation,  updateAliment, removeAliment } from "../controllers/contro_alimentation.js";

const routerAlimentation =Router()
 routerAlimentation 
    .post ('/', addAlimentation)
    .get('/',listAlimentation)
    .delete('/:id_alimentation',removeAliment)
    .put('/:id_alimentation',updateAliment)
    export default routerAlimentation