import Update from "../../models/Update";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        // console.log(req.body)
        const {title, email, updates, trlLevel, status, date} = req.body
        let u = new Update({title, email, updates, trlLevel, status, date})
        await u.save()
        
        res.status(200).json({success: "Success"})
    }
    

    else{
        res.status(400).json({error: "This method is not allowed"})
    }
    
}
export default connectDb(handler);