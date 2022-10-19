import dbConnect from "../../../../util/mongo";
import Image from "../../../../models/Image";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";




async function handler(req, res) {

    const { method, user } = req;

    await dbConnect();

    // Find all images
    if (method === "GET") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Image.find()
            .then(images => res.status(200).json(images));
    }

    // Add new images
    if (method === "POST") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")

        await Image.insertMany(req.body)
            .then(images => res.status(201).json(images))
    }
};



export default errorHandler(authenticate(handler));