import dbConnect from "../../../util/mongo";
import TripOrder from "../../../models/TripOrder";
import Trip from "../../../models/Trip";
import errorHandler from "../../../middlewares/errorsMiddleware";




async function handler(req, res) {

    const {
        method,
        query: { tripId }
    } = req;


    await dbConnect();


    // Create new trip order
    const newOrder = new TripOrder(req.body);

    if(method === "POST") {
        const savedOrder = await newOrder.save();

        await Trip.findByIdAndUpdate(tripId, {
            $push: { orders: savedOrder._id },
            $inc: { tickets: savedOrder.orderDetails.tickets.adults + savedOrder.orderDetails.tickets.children }
        });

        res.status(201).json(newOrder);
    }
};


export default errorHandler(handler);