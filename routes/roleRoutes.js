import { Router } from "express";
import { addRole, listRole, removeRole, updateRoles } from "../controllers/contro_role.js";
const routerRole = Router()
routerRole
    .post('/',addRole)
    .get('/',listRole)
    .put('/:id_role',updateRoles)
    .delete("/:id_role",removeRole)
export default routerRole