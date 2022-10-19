import dbConnect from "../../../../util/mongo";
import Car from "../../../../models/Car";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";



async function handler(req, res) {

    const {
        method,
        user,
        query: { id }
    } = req;


    await dbConnect();


    // Fetch car by id
    if (method === "GET") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Car.findById(id)
            .then(car => res.status(200).json(car))
    }

    // Update car
    if (method === "PATCH") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Car.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )
            .then(car => res.status(201).json(car))
    }



    // Delete car
    if (method === "DELETE") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Car.findByIdAndDelete(id)
            .then(car => res.status(200).json("Car has been deleted"))
    }
};



export default errorHandler(authenticate(handler))