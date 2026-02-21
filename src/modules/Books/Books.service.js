import Create_Books, { BookCollection_instans } from "../../database/modules/Books_Collection/Books.js";

const collection = await BookCollection_instans()

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

        const result = await collection.createIndex({titel : 1})
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
    const result = await collection.updateOne({title} , { $set : {year : 2022} })
    console.log(result);
    res.send({massage : result })
}

export async function Serch_with_Title(req , res) {

        try {
            const Data = req.query 
            const result = await collection.findOne({title : Data.title})
            if (result != null) {
                
                return res.json({massage : result})
            }
            return res.status(404).json({massage : "not found"})
    } catch (error) {
        
            res.status(400).json({error})
        }
    
}

export async function Serch_with_year(req , res) {
    const Data = req.query
    const From = Number(Data.from)
    const To = Number(Data.to)
    try {
        const result = await collection.find( {$and : [ { year : {$gte : From} } , { year : {$lte : To} }] }).toArray()

        
        res.json({massage : result })
    } catch (error) {
        
        res.json({error })
    }
}

export async function serch_with_genre(req , res) {
    const {genre} = req.query
    console.log(genre);
    
    try {
        const result = await collection.find( { genres : { $in : ["Science Fiction" ]} } ).toArray()
        res.json({massage : result})
    } catch (error) {
        res.json({error})
        
    }
}
export async function Skip_Limit_sort(req , res) {

    try {
        
        const result = await collection.find().skip(2).limit(3).sort({year : -1}).toArray()
        console.log(result);
        
        res.json({massage : result })
    } catch (error) {
        res.json({error})
        
    }

}