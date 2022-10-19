import dbConnect from "../../../util/mongo";
import CampOrder from "../../../models/CampOrder";
import Camp from "../../../models/Camp"
import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const {
        method,
        query: { campId },
    } = req;

    
    await dbConnect()
    

    // Create new order
    const newOrder = new CampOrder(req.body);

    if (method === "POST") {
        const savedOrder = await newOrder.save()
        
        await Camp.findByIdAndUpdate(campId, {
            $push: { orders: savedOrder._id }
        })
        
        res.status(201).json(newOrder)
    }
}


export default errorHandler(handler);
