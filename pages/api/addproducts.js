import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req,res)=>{
    // if(req.method == 'POST'){
    //     // console.log(req.body)
    //     for (let i=0; i<req.body.length; i++){
    //         let p = new Product({
    //             userId: req.body[i].userId ,
    //             email: req.body[i].email,
    //             slug: req.body[i].slug,
    //             updates: req.body[i].updates ,
    //             trlLevel: req.body[i].trlLevel ,
    //             status: req.body[i].status  
    //         })
    //         await p.save()
    //     }
        
    //     res.status(200).json({success: "Success"})
    // }
    if(req.method == 'POST'){
        // console.log(req.body)
        const {userId, email, slug, updates, trlLevel, status} = req.body
        let u = new Product({userId, email, slug, updates, trlLevel, status})
        await u.save()
        
        res.status(200).json({success: "Success"})
    }
    

    else{
        res.status(400).json({error: "This method is not allowed"})
    }
    
}
export default connectDb(handler);