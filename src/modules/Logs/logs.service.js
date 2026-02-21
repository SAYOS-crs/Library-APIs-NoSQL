import Logs_Collection from "../../database/modules/Logs_Collection/Logs.js"

export  default async function Logs_Services(req , res) {
    
    try {
        const Logs = await Logs_Collection()
        const result = await Logs.insertOne(req.body)
        res.json({massage : result})
    } catch (error) {
        res.json({error})
        
    }
}