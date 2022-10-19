import mongoose from "mongoose";



const TripOrderSchema = new mongoose.Schema({
    orderDetails: {
        title: [
            {
                type: String,
                required: true
            }
        ],
        startDate: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        ticketPrice: {
            type: Number,
            required: true
        },
        tickets: {
            adults: {
                type: Number,
                required: true
            },
            children: {
                type: Number
            }
        },
        extraOptions: [
            {
                text: [String],
                price: Number
            }
        ],
        total: {
            type: Number,
            required: true
        }
    },
    clientInfo: {
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
    new: {
        type: Boolean,
        default: true
    },
    tripId: {
        type: String,
        required: true
    }
}, { timestamps: true });


export default mongoose.models.TripOrder || mongoose.model("TripOrder", TripOrderSchema);