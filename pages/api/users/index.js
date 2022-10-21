import dbConnect from "../../../util/mongo";
import User from "../../../models/User";
import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";
import authenticate from "../../../middlewares/authentication";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        user
    } = req;

    await dbConnect()
    if (user.role !== "admin1") {
        throw createError(403, "You are not authorized");
        console.log("User", user)
    }

    if (method === "GET") {
        await User.find()
            .then(users => res.status(200).json(users))
    }

}

export default errorHandler(authenticate(handler));