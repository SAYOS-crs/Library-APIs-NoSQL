import DataBase from "../../DB.connection.js";


const db = DataBase()


const AutherCollection = await db.createCollection('Authers')

export default AutherCollection