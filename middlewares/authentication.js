import jwt from "jsonwebtoken";
import { createError } from "./errorsMiddleware";

const authenticate = (handler) => {
    return async (req, res) => {

        // console.log("Authenticaton Middleware invoked", req.headers)
        const token = await req.headers.cookie.split("=")[1];
        // console.log("MyToken", token)
        if (!token) throw createError(401, "You are not authenticated");

        jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (error, user) => {
            if(error) console.log("auth middle ware error", error);
            req.user = user;
        })

        return handler(req, res);

    }
}

export default authenticate;