import { Router } from "express";
import CreateBooksCollection, { AddBook, BooksIndex, Patch_MultiBooks, serch_with_genre, Serch_with_Title, Serch_with_year, Skip_Limit_sort, Update_Title } from "./Books.service.js";
const router = Router()

router.get('/title' , Serch_with_Title )

router.get('/year' , Serch_with_year )

router.get('/genre' , serch_with_genre )

router.get('/skip-limit' , Skip_Limit_sort)


// ======================================
router.post('/' , CreateBooksCollection)

router.post('/index' , BooksIndex )

router.post('/add' ,AddBook )

router.post('/patch' ,Patch_MultiBooks )
// ======================================

router.patch('/:title' , Update_Title )


export default router;