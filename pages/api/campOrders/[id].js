import dbConnect from "../../../util/mongo";
import CampOrder from "../../../models/CampOrder";
import Camp from "../../../models/Camp";
import errorHandler from "../../../middlewares/errorsMiddleware";



async function handler(req, res) {
    const {
        method,
        query: { id, campId }
    } = req;


    await dbConnect();

    // Fetch single camp order by id
    if (method === "GET") {
        const cmapOrder = await CampOrder.findById(id);
        res.status(200).json(cmapOrder);
    }


    // Update order
    if (method === "PATCH") {
        const updatedCampOrder = await CampOrder.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res.status(201).json(updatedCampOrder);
    }


    // Delete order 
    if (method === "DELETE") {
        await CampOrder.findByIdAndDelete(id);
        await Camp.findByIdAndUpdate(campId, {
            $pull: { orders: id }
        });

        res.status(200).json("Order has been deleted")
    }

}

export default errorHandler(handler);