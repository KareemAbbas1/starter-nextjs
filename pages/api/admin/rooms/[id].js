import dbConnect from "../../../../util/mongo";
import Room from "../../../../models/Room";
import Camp from "../../../../models/Camp"
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";
import authorize from "../../../../middlewares/authorization";




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id, campId },
        user
    } = req;

    await dbConnect()

    // Get room by id 
    if (method === "GET") {
        const room = await Room.findById(id)
        res.status(200).json(room);
    }

    // Update room 
    if (method === "PATCH") {
        const updatedRoom = await Room.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(201).json(updatedRoom)
    }

    // Delete room
    if (method === "DELETE") {
        await Room.findByIdAndDelete(id);
        await Camp.findByIdAndUpdate(campId, {
            $pull: { rooms: id }
        })

        res.status(200).json("Room has been deleted")
    }

}


export default errorHandler(authenticate(authorize(handler)));
