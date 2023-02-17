import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken"

const handler = async (req,res)=>{
    console.log(req.headers)
    const token = req.headers.authorization.split(' ')[1]
    //let token = req.body['token']
    // console.log(token)
    // print(token1)
    const data = jsonwebtoken.verify(token, 'jwtsecret')
    console.log(data)
    let products = await Product.find({email: data.email});
    console.log(products)
    // let products = await Product.find();
    return res.status(200).json({products})
}
export default connectDb(handler);