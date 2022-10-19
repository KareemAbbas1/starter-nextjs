import dbConnect from "../../../../util/mongo";
import CampOrder from "../../../../models/CampOrder";
import authenticate from "../../../../middlewares/authentication";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";




async function handler(req, res) {
    const {
        method,
        user
    } = req;


    await dbConnect();


    if (user.role === "admin1" || user.role === "admin2") {

        // Get all camps' orders
        if (method === "GET") {
            await CampOrder.find().sort({ createdAt: -1 })
                .then(orders => res.status(200).json(orders))
        }

    } else {
        throw createError(403, "You are not authorized");
    }


}



export default errorHandler(authenticate(handler));