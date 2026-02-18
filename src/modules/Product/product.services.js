import Product_Collection from "../../database/modules/Product_Collection/Product.js";


export default async function AddProduct(req , res) {
    
    
    try {
        const AddToCollection = await Product_Collection.insertOne({product : 'flour'})
        res.status(201).json({massage : AddToCollection})
        
    } catch (error) {
        res.status(400).json({Error : error.errorResponse.errmsg})
        
    }
    
}