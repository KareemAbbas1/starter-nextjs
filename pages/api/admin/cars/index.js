import dbConnect from "../../../../util/mongo";
import Car from "../../../../models/Car";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";



async function handler(req, res) {

    const { method, user } = req;

    await dbConnect();

    // Create new Car
    if (method === "POST") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Car.create(req.body)
            .then(car => res.status(201).json(car))
    }
};



export default errorHandler(authenticate(handler));