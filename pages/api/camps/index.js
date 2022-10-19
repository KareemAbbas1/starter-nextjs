import dbConnect from "../../../util/mongo";
import Camp from "../../../models/Camp";
// import auth from "../../../middlewares/authMiddleware";
import errorHandler from "../../../middlewares/errorsMiddleware";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const { method } = req;

    await dbConnect()


    // Get all camps
    if (method === "GET") {
        await Camp.find()
            .then(camps => res.status(200).json(camps))
    }

}


export default errorHandler(handler);
