import dbConnect from "../../../../util/mongo";
import Activity from "../../../../models/Activity";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";




async function handler(req, res) {

    const {
        method,
        user,
        query: { id }
    } = req;


    await dbConnect();


    // Get activity by id
    if (method === "GET") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Activity.findById(id)
            .then(activity => res.status(200).json(activity))
    }


    // Update activity
    if (method === "PATCH") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Activity.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        )
            .then(activity => res.status(201).json(activity))
    }



    // Delete activity
    if (method === "DELETE") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Activity.findByIdAndDelete(id)
            .then(activity => res.status(200).json("Activity has been deleted"))
    }
};



export default errorHandler(authenticate(handler))