import mongoose from "mongoose";



const CarSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true });


export default mongoose.models.Car || mongoose.model("Car", CarSchema);