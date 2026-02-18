import { Router } from "express";
import Logs_Services from "./logs.service.js";
const router = Router()

router.post( '/' ,  Logs_Services )



export default router;