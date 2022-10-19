import mongoose from "mongoose";



const ActivitySchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: [
        {
            type: String,
            required: true
        }
    ],
    description: [
        {
            type: String,
            required: true
        }
    ],
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true });


export default mongoose.models.Activity || mongoose.model("Activity", ActivitySchema);