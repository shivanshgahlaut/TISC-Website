const mongoose = require('mongoose');

const UpdateSchema = new mongoose.Schema({
    title: {type: String, required: true},
    email: {type: String, required: true} ,
    updates: {type: String, required: true},
    trlLevel: {type: String, required: true} ,
    status: {type: String, required: true} ,
    date: {type: String, required: true}
}, {timestamps: true});

export default mongoose.models.Update || mongoose.model("Update", UpdateSchema)