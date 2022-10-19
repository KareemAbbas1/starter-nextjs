import dbConnect from "../../../util/mongo";
import Camp from "../../../models/Camp";
import Room from "../../../models/Room";
import errorHandler from "../../../middlewares/errorsMiddleware";




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { campId }
    } = req;

    await dbConnect()

    // Fetch camp's rooms
    if(method === "GET") {
        const camp = await Camp.findById(campId)
        const roomsList = await Promise.all(
            camp.rooms.map((room) => {
                return Room.findById(room)
            })
        )
        res.status(200).json(roomsList)
    }
}

export default errorHandler(handler);
