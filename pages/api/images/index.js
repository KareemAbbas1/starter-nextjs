import dbConnect from "../../../util/mongo";
import Image from "../../../models/Image";
import errorHandler from "../../../middlewares/errorsMiddleware";




async function handler(req, res) {

    const { method } = req;


    // Get all images
    if (method === "GET") {
        await Image.find()
        .then(images => res.status(200).json(images))
    }
};



export default errorHandler(handler);