import dbConnect from "../../../util/mongo";
import User from "../../../models/User";
import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const { method } = req;

    await dbConnect()

    // Login user
    if (method === "POST") {

        const user = await User.findOne({ email: req.body.email })
        if (!user) throw createError(404, "User Not Found")

        const correctPassword = await bcrypt.compare(req.body.password, user.password)
        if (!correctPassword) throw createError(400, "Wrong Credentials")

        // Set token 
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        // Extract data from response
        const { password, ...userDetails } = user._doc;

        // Set the cookie
        res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
                maxAge: 60 * 60 * 7,
                sameSite: "strict",
                path: "/",
                httpOnly: true
            })
        ).status(200).json({ ...userDetails });

    }

}

export default errorHandler(handler);