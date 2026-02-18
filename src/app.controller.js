import { AutherRouter, BooksRouter, LogsRouter, productRouter } from "./modules/index.js"


export default function BootStrap(app , express) {
    app.use( express.json() )
    app.use('/', productRouter )
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
    //--------------------- {Books Collection} -----------------------------------
    // 1. Create an explicit collection named “books” with a validation rule to ensure that each
    // document has a non-empty “title” field. (0.5 Grade)
    // • URL: POST /collection/books
    //-------------------- && --------------------
    //  4. Create an index on the books collection for the title field. (0.5 Grade)
    // • URL: POST /collection/books/index
    //-------------------- && --------------------
    //  5. Insert one document into the books collection. (0.5 Grade)
    //  • URL: POST /books
    //-------------------- && --------------------
    // 6. Insert multiple documents into the books collection with at least three records. (0.5 Grade)
    //• URL: POST /books/batch
    //-------------------- && --------------------
    //8. Update the book with title “Future” change the year to be 2022. (0.5 Grade)
    //URL: PATCH/books/:title
    app.use('/Collection/Books' , BooksRouter)
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
//    2. Create an implicit collection by inserting data directly into a new collection named
// “authors”. (0.5 Grade)
    app.use('/Collection/Auther' , AutherRouter )
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
//-----------------{logs}-----------------------
    //3. Create a capped collection named “logs” with a size limit of 1MB. (0.5 Grade)
    // • URL: POST /collection/logs/capped
    //---------------- && -----------------------
    //7. Insert a new log into the logs collection. (0.5 Grade)
    //• URL: POST /logs
    app.use('/Collection/Logs' , LogsRouter)
// -----------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------
    /*

    */
    // -----------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------

}