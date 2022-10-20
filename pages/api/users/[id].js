import dbConnect from "../../../util/mongo";
import User from "../../../models/User";
import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";
import authenticate from "../../../middlewares/authentication";
import bcrypt from "bcryptjs";



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id },
        user
    } = req;

    dbConnect()


    // Get user by Id
    if (method === "GET") {

        const user = await User.findById(id).select("-password");
        res.status(200).json(user);
    }

    // Fetch by ID and Update
    if (method === "PATCH") {
        if (user.role !== "admin1") throw createError(403, "You are not authorized");
        
        // Hash new password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { $set: {password: hash} },
            { new: true }
        );
        res.status(201).json(updatedUser)
    }

    // Delete camp
    if (method === "DELETE") {
        if (user.role !== "admin1") throw createError(403, "You are not authorized")
        await User.findByIdAndDelete(id)
        res.status(200).json("User has been deleted")
    }

}



export default errorHandler(authenticate(handler));
