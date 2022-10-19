import mongoose from "mongoose";



const ImageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    }
}, { timestamps: true });


export default mongoose.models.Image || mongoose.model("Image", ImageSchema);