import dbConnect from "../../../util/mongo";
import Activity from "../../../models/Activity";
import errorHandler from "../../../middlewares/errorsMiddleware";




async function handler(req, res) {

    const { method } = req;

    await dbConnect();


    // Get all activities
    if (method === "GET") {
        await Activity.find()
            .then(activities => res.status(200).json(activities))
    }
};



export default errorHandler(handler);