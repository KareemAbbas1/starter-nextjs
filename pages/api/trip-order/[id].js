import dbConnect from "../../../util/mongo";
import TripOrder from "../../../models/TripOrder";
import Trip from "../../../models/Trip";
import errorHandler from "../../../middlewares/errorsMiddleware";




async function handler(req, res) {
    const {
        method,
        query: { id, tripId }
    } = req;


    await dbConnect();


    // Fetch single trip order by id
    if (method === "GET") {
        const tripOrder = await TripOrder.findById(id);
        res.status(200).json(tripOrder);
    };


    // Update trip order
    if (method === "PATCH") {
        const updatedTripOrder = await TripOrder.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        res.status(201).json(updatedTripOrder)
    }


    // Delete order 
    if (method === "DELETE") {
        const order = await TripOrder.findById(id);
        const ticketsCount = order.orderDetails.tickets.adults + order.orderDetails.tickets.children;
        await Trip.findByIdAndUpdate(tripId, {
            $pull: { orders: id },
            $inc: { tickets: -ticketsCount }
        });
        await TripOrder.findByIdAndDelete(id);
        res.status(200).json("Order has been deleted")
    }
};


export default errorHandler(handler);