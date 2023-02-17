import Update from "../../models/Update";
import connectDb from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken"

const handler = async (req,res)=>{
    const token = req.body.token
    const data = jsonwebtoken.verify(token, 'jwtsecret')
    // console.log(data)
    let info = await Update.find({email: data.email});
    // console.log(info)
    // let info = await Update.find();
    return res.status(200).json({info})
}
export default connectDb(handler);