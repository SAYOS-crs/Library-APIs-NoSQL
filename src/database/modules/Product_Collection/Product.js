import DataBase from "../../DB.connection.js";

 const db = DataBase()

const Product_Collection = await db.createCollection('Products' , {validator : { product : { $type : 2 } } })
export default  Product_Collection ;