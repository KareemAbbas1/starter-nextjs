import dbConnect from "../../../util/mongo";
// import Camp from "../../../models/Camp";
import Room from "../../../models/Room";
import errorHandler from "../../../middlewares/errorsMiddleware";




// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { id, remove, updateLocation }
    } = req;

    await dbConnect()


    // add dates
    if (method === "PATCH" && remove === "off" && updateLocation === "off") {
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


    // remove dates
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

    // update room location
    if(method === "PATCH" && updateLocation === "on") {
        const updatedRoom = await Room.updateOne(
            { "roomNumbers._id": id },
            {
                $set: {
                    "roomNumbers.$.roomLocation": req.body.roomLocation
                }
            }
        );
        res.status(201).json(updatedRoom)
    }
}

export default errorHandler(handler);
