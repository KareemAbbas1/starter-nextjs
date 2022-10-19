import mongoose from "mongoose";


const ExtraFacilitySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


const CampSchema = new mongoose.Schema({
    name: [
        {
            type: String,
            required: true
        },
    ],
    location: [
        {
            type: String,
            required: true
        },
    ],
    images: [String],
    rate: {
        type: Number,
        min: 0,
        max: 5
    },
    description: {
        type: [String],
        required: true
    },
    facilities: {
        english: {
            type: Array,
            required: true
        },
        arabic: {
            type: Array,
            required: true
        }
    },
    extraFacilities: [ExtraFacilitySchema],
    houseRules: {
        english: {
            type: Array,
            required: true
        },
        arabic: {
            type: Array,
            required: true
        }
    },
    rooms: {
        type: [String]
    },
    orders: {
        type: [String]
    }
}, { timestamps: true });

export default mongoose.models.Camp || mongoose.model("Camp", CampSchema);