import { Router } from "express";
import AddProduct from "./product.services.js";
const router = Router()

router.get('' , AddProduct)

export default router;