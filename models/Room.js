import mongoose from "mongoose";



const RoomSchema = new mongoose.Schema({
    roomType: [
        {
            type: String,
            required: true
        },
    ],
    maxPeople: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: [
        {
            type: String,
            required: true
        }
    ],
    campId: {
        type: String,
        required: true
    },
    campName: [
        {
            type: String,
            required: true
        },
    ],
    roomNumbers: [{ roomNumber: Number, unavailableDates: [{ type: String }] }]
}, { timestamps: true });


export default mongoose.models.Room || mongoose.model("Room", RoomSchema)