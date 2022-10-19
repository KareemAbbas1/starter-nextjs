import dbConnect from "../../../util/mongo";
import Camp from "../../../models/Camp";
import errorHandler from "../../../middlewares/errorsMiddleware";




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id, rooms }
    } = req;

    await dbConnect()


    // Fetch Camp By id
    if (method === "GET") {
        const camp = await Camp.findById(id);
        res.status(200).json(camp);
    }

}



export default errorHandler(handler);