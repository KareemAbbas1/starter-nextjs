import dbConnect from "../../../util/mongo";
import Trip from "../../../models/Trip";
import errorHandler from "../../../middlewares/errorsMiddleware";




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id }
    } = req;

    await dbConnect()

    if (method === "GET") {

        const trip = await Trip.findById(id);
        res.status(200).json(trip);
    }

}


export default errorHandler(handler);