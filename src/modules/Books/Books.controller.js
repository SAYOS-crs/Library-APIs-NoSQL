import { Router } from "express";
import CreateBooksCollection, { AddBook, Aggregation1, Aggregation2, Aggregation3, Aggregation4, BooksIndex, Delete_books_befor, exclude_genres, Patch_MultiBooks, serch_with_genre, Serch_with_Title, Serch_with_year, serch_year_integer, Skip_Limit_sort, Update_Title } from "./Books.service.js";
const router = Router()
// -----------------------------------------------------------------------------------------------
    // 1. Create an explicit collection named “books” with a validation rule to ensure that each
    // document has a non-empty “title” field. (0.5 Grade)
    // • URL: POST /collection/books
    router.post('/' , CreateBooksCollection)
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //  4. Create an index on the books collection for the title field. (0.5 Grade)
    // • URL: POST /collection/books/index
    router.post('/index' , BooksIndex )
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //  5. Insert one document into the books collection. (0.5 Grade)
    //  • URL: POST /books
    router.post('/add' ,AddBook )
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    // 6. Insert multiple documents into the books collection with at least three records. (0.5 Grade)
    //• URL: POST /books/batch
    router.post('/patch' ,Patch_MultiBooks )
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //8. Update the book with title “Future” change the year to be 2022. (0.5 Grade)
    //URL: PATCH/books/:title
    router.patch('/:title' , Update_Title )
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //9. Find a Book with title “Brave New World”. (0.5 Grade)
    // • URL: GET /books/title => /books/title?title=Brave New World
    router.get('/title' , Serch_with_Title )
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //10. Find all books published between 1990 and 2010. (0.5 Grade)
    //• URL: GET /books/year => /books/year?from=1990&to=2010
    router.get('/year' , Serch_with_year )
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    // 11. Find books where the genre includes "Science Fiction".(0.5 Grade)
    // • URL: /books/genre?genre=Science Fiction
    router.get('/genre' , serch_with_genre )
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //12. Skip the first two books, limit the results to the next three, sorted by year in descending
    // order. (0.5 Grade)
    // • URL: GET /books/skip-limit
    router.get('/skip-limit' , Skip_Limit_sort)
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //  13. Find books where the year field stored as an integer. (0.5 Grade)
    // • URL: GET /books/year-integer
    router.get('/year-integer' , serch_year_integer)
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    //  14. Find all books where the genres field does not include any of the genres "Horror" or
    // "Science Fiction". (0.5 Grade)
    // • URL: GET /books/exclude-genres
    router.get('/exclude-genres' ,exclude_genres)
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    // 15. Delete all books published before 2000. (0.5 Grade)
    // • DELETE: GET /books/before-year?year=2000
    router.delete('/befor-year' , Delete_books_befor)
    // -----------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------
    // ------------------------------------------{aggregation} ---------------------------------------
    // 16. Using aggregation Functions, Filter books published after 2000 and sort them by year
    // descending. (0.5 Grade)
    // • URL: GET /books/aggregate1
    router.get('/aggregate1' , Aggregation1)
    //-------------------- && --------------------
    //-------------------- && --------------------
    //-------------------- && --------------------
    // 17. Using aggregation functions, Find all books published after the year 2000. For each
    // matching book, show only the title, author, and year fields. (0.5 Grade)
    // • URL: GET /books/aggregate2
    router.get('/aggregate2' , Aggregation2)
    //-------------------- && --------------------
    //-------------------- && --------------------
    //-------------------- && --------------------
    // 18. Using aggregation functions,break an array of genres into separate documents. (0.5 Grade)
    // • URL: GET /books/aggregate3
    router.get('/aggregate3' , Aggregation3)
    //-------------------- && --------------------
    //-------------------- && --------------------
    //-------------------- && --------------------
    // 19. Using aggregation functions, Join the books collection with the logs collection. (1 Grade)
    // • URL: GET /books/aggregate4
    router.get('/aggregate4' , Aggregation4)

// ======================================
// ======================================
// ======================================
export default router;