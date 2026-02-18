import AutherCollection from "../../database/modules/auther_Collection/auther.js"



export  const CreateAuther = async (req , res )=>{
    const {name , nationalty } = req.body
    try {
        const result = await AutherCollection.insertOne({name , nationalty })
        return res.status(201).json({massage : result})
    } catch (error) {
        return res.status(400).json({error })
        
    }

}