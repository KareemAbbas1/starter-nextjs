import dbConnect from "../../../../util/mongo";
import Image from "../../../../models/Image";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";



async function handler(req, res) {

    const {
        method,
        user,
        query: { id }
    } = req;


    await dbConnect();

    // Change image
    if (method === "PATCH") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Image.findByIdAndUpdate(
            id,
            { $set: req.body }
        )
            .then(image => res.status(201).json(image));
    }
};



export default errorHandler(authenticate(handler));