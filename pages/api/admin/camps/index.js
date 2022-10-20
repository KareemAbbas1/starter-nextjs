import dbConnect from "../../../../util/mongo";
import Camp from "../../../../models/Camp";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        user
    } = req;

    await dbConnect()

    // Create new camp
    if (method === "POST") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Camp.create(req.body)
            .then(camp => res.status(201).json(camp))
    }
}


export default errorHandler(authenticate(handler));