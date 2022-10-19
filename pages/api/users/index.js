import dbConnect from "../../../util/mongo";
import User from "../../../models/User";
import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";
import authenticate from "../../../middlewares/authentication";
import authorize from "../../../middlewares/authorization"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        user
    } = req;

    await dbConnect()
    if (user.role !== "admin1") throw createError(403, "You are not authorized")

    if (method === "GET") {
        await User.find()
            .then(users => res.status(200).json(users))
    }

}

export default errorHandler(authenticate(authorize(handler)));