import { Router } from "express";
import { addAbonnement, listAbonnement, removeAbonnement, updateAbonnement } from "../controllers/contro_abonnement.js";
const routerAbonnement = Router()
routerAbonnement
    .post('/',addAbonnement)
    .get('/',listAbonnement)
    .delete('/:id_abonnement',removeAbonnement)
    .put('/:id_abonnement',updateAbonnement)
export default routerAbonnement