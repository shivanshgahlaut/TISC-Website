import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken"

const handler = async (req,res)=>{
    const token = req.body.token
    const data = jsonwebtoken.verify(token, 'jwtsecret')
    // console.log(data)
    let startups = await Product.find({email: data.email});
    // console.log(startups)
    // let products = await Product.find();
    return res.status(200).json({startups})
}
export default connectDb(handler);