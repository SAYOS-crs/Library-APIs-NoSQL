import DataBase from "../../DB.connection.js";


 const db = DataBase()
// Create_Books function the use command method from mongodb to create collection and return massage : not returning instans!
export default async function Create_Books() {
    const result = await db.command({
        create : 'Books',
        validator: { titel: { $type: 2 } },
        
    })
    console.log(result);
    
    return result
}

// BookCollection_instans is a custom module that can insert one or many by demand or just create the collection and return the instans
export async function BookCollection_instans(data , methodType) {
    const Collection = await db.collection('Books')
    if (data) {
        console.log(data);
        if (methodType === 'insertOne') {
            
            return await Collection.insertOne(data)
        }else if (methodType === 'insertMany') {
            
            return await Collection.insertMany(data)
        }
        
    }
    return  Collection
}


