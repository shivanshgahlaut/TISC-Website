const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    email: {type: String, required: true, unique: true} ,
    slug: {type: String, required: true, unique: true},
    updates: {type: String, required: true},
    trlLevel: {type: String, required: true} ,
    status: {type: String, required: true} ,
}, {timestamps: true});

// mongoose.models = {}

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
// export default mongoose.model("Product", ProductSchema)