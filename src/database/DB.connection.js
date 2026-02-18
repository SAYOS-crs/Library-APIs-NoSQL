import { MongoClient } from "mongodb";
const Url = 'mongodb://localhost:27017'
const Client = new MongoClient(Url)
const DataBase = ()=>{
    return Client.db('Store') 
} 


export function DataBaseConnection() {
    try {
     Client.connect()
     console.log('DataBase Connected Successfully ');

} catch (error) {
    console.log('DataBase Connection Error');
    
}
}

export default DataBase
