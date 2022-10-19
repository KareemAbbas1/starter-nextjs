import mongoose from "mongoose";



const CampOrderSchema = new mongoose.Schema({
    orderDetails: {
        camp: [
            {
                type: String,
                required: true
            }
        ],
        checkout: {
            type: String,
            required: true
        },
        dates: [
            {
                type: String,
                required: true
            }
        ],
        guestsCount: {
            adults: {
                type: String,
                required: true
            },
            children: String,
        },
        rooms: {
            doubleRooms: String,
            bungalows: String,
            huts: String
        },
        roomsNumbers: [
            {
                type: String,
                required: true
            }
        ],
        roomsPrices: {
            roomPrice: {
                type: String,
                required: true
            },
            bungalowPrice: {
                type: String,
                required: true
            },
            hutPrice: {
                type: String,
                required: true
            }
        },
        dinnerData: {
            dinner: {
                type: String,
                required: true
            },
            dinnerPrice: Number
        },
        total: {
            type: String,
            required: true
        }
    },
    guestInfo: {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
    },
    state: {
        type: String,
        required: true
    },
    campId: {
        type: String,
        required: true
    },
    roomsIds: [
        {
            type: String,
            required: true
        }
    ],
    new: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });


export default mongoose.models.CampOrder || mongoose.model("CampOrder", CampOrderSchema);