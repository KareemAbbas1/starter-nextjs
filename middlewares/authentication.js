import jwt from "jsonwebtoken";
import { createError } from "./errorsMiddleware";

const authenticate = (handler) => {
    return async (req, res) => {

        // console.log("Authenticaton Middleware invoked", req.headers)
        const token = req.headers.cookie && req.headers.cookie.split("=")[1];
        // console.log("MyToken", token)
        if (!token) throw createError(401, "You are not authenticated");

        jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
            if(error) throw createError(403, "Token is not valid");
            req.user = user;
        })

        return handler(req, res);

    }
}

export default authenticate;