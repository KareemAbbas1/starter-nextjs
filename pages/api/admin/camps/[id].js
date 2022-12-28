import dbConnect from "../../../../util/mongo";
import Camp from "../../../../models/Camp";
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id },
        user
    } = req;

    await dbConnect()

    // Fetch by ID and Update
    if (method === "PATCH") {
        const updatedCamp = await Camp.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(201).json(updatedCamp)
    }

    // Delete camp
    if (method === "DELETE") {
        if (user.role !== "admin1" && user.role !== "admin2")
            throw createError(403, "You are not authorized")


        await Camp.findByIdAndDelete(id)
        res.status(200).json("Camp has been deleted")
        // delete camp orders upon deleting
    }

}


export default errorHandler(authenticate(handler));
