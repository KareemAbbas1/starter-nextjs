import mongoose from "mongoose";



const TripsSchema = new mongoose.Schema({
    title: [
        {
            type: String,
            required: true
        },
    ],
    state: [
        {
            type: String,
            required: true
        },
    ],
    destination: [
        {
            type: String,
            required: true
        },
    ],
    images: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    maxPeople: {
        type: Number,
        required: true
    },
    overview: {
        type: [String],
        required: true
    },
    tripPlan: {
        english: {
            type: Array,
            required: true
        },
        arabic: {
            type: Array,
            required: true
        }
    },
    rate: {
        type: Number
    },
    extraOptions: {
        type: [
            {
                text: { type: [String] },
                price: { type: Number },
            },
        ]
    },
    orders: {
        type: [String]
    },
    tickets: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


export default mongoose.models.Trip || mongoose.model("Trip", TripsSchema);