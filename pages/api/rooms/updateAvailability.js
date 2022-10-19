import dbConnect from "../../../util/mongo";
// import Camp from "../../../models/Camp";
import Room from "../../../models/Room";
import errorHandler from "../../../middlewares/errorsMiddleware";




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id, remove }
    } = req;

    await dbConnect()


    if (method === "PATCH" && remove === "off") {
        await Room.updateOne(
            { "roomNumbers._id": id },
            {
                $push: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                }
            }
        );
        res.status(201).json("Room has been updated successfuly")
    }


    if (method === "PATCH" && remove === "on") {
        const updatedRoom = await Room.updateOne(
            { "roomNumbers._id": id },
            {
                $pullAll: {
                    "roomNumbers.$.unavailableDates": req.body.dates
                }
            }
        );
        res.status(201).json(updatedRoom)
    }
}

export default errorHandler(handler);
