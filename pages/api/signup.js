import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
var CryptoJS = require("crypto-js");

const handler = async (req,res)=>{
    if(req.method == 'POST'){
        // console.log(req.body)
        const {name, email} = req.body
        let u = new User({name, email, password: CryptoJS.AES.encrypt(JSON.stringify(req.body.password), "secret123").toString()})
        await u.save()
        
        res.status(200).json({success: "Success"})
    }
    

    else{
        res.status(400).json({error: "This method is not allowed"})
    }
    
}
export default connectDb(handler);