import verify from "jsonwebtoken/verify";
import { createError } from "./errorsMiddleware";

const authenticate = (handler) => {
    return async (req, res) => {

        // console.log("Authenticaton Middleware invoked", req.headers)
        const token = req.headers.cookie && (
            process.env.NEXT_PUBLIC_CURRENT_ENV !== "production" 
            ? req.headers.cookie.split("=")[1]
            : req.headers.cookie.split("=")[1]
        );
        // console.log("MyToken", token)
        if (!token) throw createError(401, "You are not authenticated");

        verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (error, user) => {
            if (error) throw createError(403, "Token is not valid");
            req.user = user;
            console.log(token)
        })

        return handler(req, res);

    }
}

export default authenticate;