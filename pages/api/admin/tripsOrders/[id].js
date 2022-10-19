import dbConnect from "../../../../util/mongo";
import Trip from "../../../../models/Trip";
import TripOrder from "../../../../models/TripOrder";
import errorHandler from "../../../../middlewares/errorsMiddleware";




async function handler(req, res) {

    const {
        method,
        query: { id }
    } = req;


    await dbConnect();


    // Fetch Single Trip orders
    if(method === "GET") {
        const trip = await Trip.findById(id);
        const ordersList = await Promise.all(
            trip.orders.map((orderId) => {
                return TripOrder.findById(orderId)
            })
        )

        res.status(200).json(ordersList);
    }

};


export default errorHandler(handler);