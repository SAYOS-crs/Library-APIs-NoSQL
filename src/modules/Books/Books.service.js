import Create_Books, { BookCollection_instans } from "../../database/modules/Books_Collection/Books.js";
import Logs_Collection from "../../database/modules/Logs_Collection/Logs.js";

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
        if (result) {
            const logs = await Logs_Collection()
            logs.insertOne({book_Id : result.insertedId , action : req.body.action , createdAt : new Date()  })
        }
    } catch (error) {
        res.json({error })
        
    }
}


export async function Patch_MultiBooks(req , res) {
    const Data = req.body
        try {
        const result = await BookCollection_instans(Data , 'insertMany')

        
        
        if (result) {
            const insertedIds = Object.values(result.insertedIds);
            const logData = insertedIds.map( (id)=>({
                    book_Id: id,
                    action: "Borrowed",
                    createdAt: new Date()
                }) )
           const logs = await Logs_Collection()
           logs.insertMany(logData)
        }
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

export async function serch_year_integer(req , res) {
    try {
        const result = await collection.find( { year : {$type : ['int']}    } ).toArray()
        
        res.json({massage : result})
    } catch (error) {
        res.json({error})
    }
}

export async function exclude_genres(req , res) {
    try {
        const result = await collection.find( { genres : {$nin : ['Science Fiction' , "Horror"]  } } ).toArray()
        res.json({massage : result})
    } catch (error) {
        
        res.json({error})
    }
}

export async function Delete_books_befor(req , res) {
    const Y = Number(req.query.year)
    console.log(Y);
    
    try {
        const result = await collection.deleteMany( { year : {$lt : Y} } )
        res.json({massage : result})
    } catch (error) {
        res.json({error})
        
    }

}
// ----------------- aggregation --------------------//
export async function Aggregation1(req , res) {
    try {
        const result = await collection.aggregate([
            {$match : {year : {$gt : 2000}}},
            {$sort : {year : -1}}
        ]).toArray()
        res.json({massage : result})
    } catch (error) {
        res.json({error})
    }
}

export async function Aggregation2(req , res) {
    try {
        const result = await collection.aggregate([
            {$match : {year : {$gt : 2000}}},
            {$sort : {year : -1}},
            {$project : {_id : 0 , genres : 0}}
        ]).toArray()
        res.json({massage : result})
    } catch (error) {
        res.json({error})
    }
}

export async function Aggregation3(req , res) {
    try {
        const result = await collection.aggregate([
            {$unwind : {path : "$genres" , 
                      includeArrayIndex: "Index",
                    preserveNullAndEmptyArrays: true
            }}
        ]).toArray()
        res.json({massage : result})
    } catch (error) {
        res.json({error})
    }
}

export async function Aggregation4(req , res) {
    try {
        const result = await collection.aggregate([
            { $lookup: {
            from: "Logs",
            localField: "_id",
            foreignField: "book_Id",
            as: "inventoryDocs"
         }
            },

        ]).toArray()
        res.json({massage : result})
    } catch (error) {
        res.json({error})
    }
}
