import dbConnect from "../../../../util/mongo";
import Activity from "../../../../models/Activity";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";



async function handler(req, res) {

    const { method, user } = req;

    await dbConnect();

    // Create new activity
    if (method === "POST") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Activity.create(req.body)
            .then(activity => res.status(201).json(activity))
    }
};



export default errorHandler(authenticate(handler));