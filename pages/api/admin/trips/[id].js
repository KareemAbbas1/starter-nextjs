import dbConnect from "../../../../util/mongo";
import Trip from "../../../../models/Trip";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id },
        user
    } = req;

    await dbConnect()

    // Update Trip
    if (method === "PATCH") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        const updatedTrip = await Trip.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(201).json(updatedTrip)
    }

    // Delete Trip
    if (method === "DELETE") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Trip.findByIdAndDelete(id)
        res.status(200).json("Trip has been deleted")
    }
}


export default errorHandler(authenticate(handler));
