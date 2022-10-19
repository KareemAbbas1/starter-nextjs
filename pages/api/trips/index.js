import dbConnect from "../../../util/mongo";
import Trip from "../../../models/Trip";
import errorHandler from "../../../middlewares/errorsMiddleware";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    // Get all trips
    if (method === "GET") {
        await Trip.find().sort({ createdAt: -1 })
            .then(trips => res.status(200).json(trips))
    }

}

export default errorHandler(handler);