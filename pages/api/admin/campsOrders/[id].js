import dbConnect from "../../../../util/mongo";
import Camp from "../../../../models/Camp";
import CampOrder from "../../../../models/CampOrder";
import errorHandler from "../../../../middlewares/errorsMiddleware";



async function handler(req, res) {
    const {
        method,
        query: { id }
    } = req;

    await dbConnect();


    // Fetch Single Camp orders
    if(method === "GET") {
        const camp = await Camp.findById(id)
        const ordersList = await Promise.all(
            camp.orders.map((orderId) => {
                return CampOrder.findById(orderId)
            })
        )

        res.status(200).json(ordersList)
    }

};


export default errorHandler(handler);