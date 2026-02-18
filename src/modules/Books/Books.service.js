import Create_Books, { BookCollection_instans } from "../../database/modules/Books_Collection/Books.js";



export default async function CreateBooksCollection(req , res ) {
    try {
        const result = await Create_Books()
        res.status(200).json({massage : result })
    } catch (error) {
        res.status(400).json({Error : error })
        
    }
}


export async function BooksIndex(req , res) {
    try {
        const indexing = await BookCollection_instans()
        const result = await indexing.createIndex({titel : 1})
        res.json({massage : result})
        
    } catch (error) {
        res.json({error})
        
    }
} 


export async function AddBook(req , res) {
    try {
        const result = await BookCollection_instans(req.body , 'insertOne')
        res.json({massage : result })
    } catch (error) {
        res.json({error })
        
    }
}

export async function Patch_MultiBooks(req , res) {
        try {
        const result = await BookCollection_instans(req.body , 'insertMany')
        res.json({massage : result })
    } catch (error) {
        res.json({error })
        
    }
}


export async function Update_Title(req , res) {
    const {title} = req.params
    const Collection = await BookCollection_instans()
    const result = await Collection.updateOne({title} , { $set : {year : 2022} })
    console.log(result);
    res.send({massage : result })
}