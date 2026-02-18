import { Router } from "express";
import CreateBooksCollection, { AddBook, BooksIndex, Patch_MultiBooks, Update_Title } from "./Books.service.js";
const router = Router()


router.post('/' , CreateBooksCollection)

router.post('/index' , BooksIndex )

router.post('/add' ,AddBook )

router.post('/patch' ,Patch_MultiBooks )

router.patch('/:title' , Update_Title )

export default router;