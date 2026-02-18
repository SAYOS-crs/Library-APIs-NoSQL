import DataBase from "../../DB.connection.js";



const db = DataBase()
const Collection = async ()=>{
   return await db.createCollection('Logs' , {
    capped: true,
    size: 1000,
    max : 10,
})
} 

export default Collection;