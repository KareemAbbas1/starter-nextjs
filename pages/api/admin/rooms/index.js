import dbConnect from "../../../../util/mongo";
import Room from "../../../../models/Room";
import Camp from "../../../../models/Camp"
import errorHandler, { createError } from "../../../../middlewares/errorsMiddleware";
import authenticate from "../../../../middlewares/authentication";



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { campId },
        user
    } = req;

    
    await dbConnect()
    
    // Get all rooms
    if(method === "GET") {
        await Room.find()
        .then(rooms => res.status(200).json(rooms))
    }
    
    // Create new room
    if (method === "POST") {
        const newRoom = new Room(req.body);
        const savedRoom = await newRoom.save()

        await Camp.findByIdAndUpdate(campId, {
            $push: { rooms: savedRoom._id }
        })

        res.status(201).json(newRoom)
    }
}


export default errorHandler(authenticate(handler));
