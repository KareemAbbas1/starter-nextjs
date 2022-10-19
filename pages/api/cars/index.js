import dbConnect from "../../../util/mongo";
import Car from "../../../models/Car";
import errorHandler from "../../../middlewares/errorsMiddleware";



async function handler(req, res) {

    const { method } = req;

    await dbConnect();


    // Get all cars 
    if (method === "GET") {
        await Car.find()
            .then(cars => res.status(200).json(cars))
    }
};



export default errorHandler(handler);