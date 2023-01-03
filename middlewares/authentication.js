import jwt from "jsonwebtoken";
import { createError } from "./errorsMiddleware";

const authenticate = (handler) => {
    return async (req, res) => {

        // console.log("Authenticaton Middleware invoked", req.headers)
        // const token = req.headers.cookie && req.headers.cookie.split("token=")[1]; Extracting the token this way only works in dev mode
        const token = req.headers.cookie && req.headers.cookie.split("token=")[1].split(";")[0];// In production mode(browser) the above method of extracting the token doesn't work because the browser adds extra text to the end of the token thus it returns token is not valid
        // console.log(req.headers.cookie && req.headers.cookie.split("token=")[1].split(";")[0]);
        // console.log("MyToken", token)
        if (!token) throw createError(401, "You are not authenticated");

        jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (error, user) => {
            if(error) throw createError(403, "Token is not valid");
            req.user = user;
        })

        return handler(req, res);

    }
}

export default authenticate;