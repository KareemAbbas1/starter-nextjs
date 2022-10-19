import dbConnect from "../../../../util/mongo";
import Trip from "../../../../models/Trip";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";
import authorize from "../../../../middlewares/authorization";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        user
    } = req;

    await dbConnect()

    // Create new Trip
    if (method === "POST") {

        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        if (req.body.extraOptions[0] === false) {
            
        }
        await Trip.create(req.body)
            .then(trip => res.status(201).json(trip))
    }
}


export default errorHandler(authenticate(authorize(handler)));