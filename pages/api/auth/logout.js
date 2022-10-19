import cookie from "cookie";
import errorHandler from "../../../middlewares/errorsMiddleware";

async function handler(req, res) {

    const { method, cookies } = req;

    const token = cookies.token

    if (method === "GET") {

        const serialized = cookie.serialize("token", null, {
            maxAge: -1,
            sameSite: "strict",
            path: "/",
            httpOnly: true
        })

        res.setHeader("Set-Cookie", serialized);
        res.status(200).json({message: "Logged out successfully"});
    }
}

export default errorHandler(handler);