import {Router} from "express";
import * as AutherServices from "./Auther.service.js";


const router = Router()



router.get('/' , AutherServices.CreateAuther )

export default router;