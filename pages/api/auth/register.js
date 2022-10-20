import dbConnect from "../../../util/mongo";
import User from "../../../models/User";
import authenticate from "../../../middlewares/authentication";
import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";
import bcrypt from "bcryptjs";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
async function handler(req, res) {
    const { 
        method,
        user
     } = req;

    await dbConnect()

    // Create new user
    if (method === "POST") {
        if(user.role !== "admin1")
        throw createError(403, "You are not authorized")

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Check if the email or the username already exitst in the datebase
        const existingEmail = await User.findOne({email: req.body.email});
        if (existingEmail && existingEmail.email !== null )
        throw createError(400, "This email already exist")

        const existingUsername = await User.findOne({username: req.body.username});
        if (existingUsername && existingUsername.username !== null)
        throw createError(400, "This username already exist")


        // Success senario(return new user)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: req.body.role,
        })

        await newUser.save()
            .then(newUser => res.status(201).json(newUser))

    }

}



export default errorHandler(authenticate(handler));