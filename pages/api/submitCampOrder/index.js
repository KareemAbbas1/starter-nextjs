import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";
import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();



async function handler(req, res) {
    const { method } = req;

    const { guestInfo } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        }
    })

    if (method === "POST") {
        try {
            const emailResponse = await transporter.sendMail({
                from: process.env.user,
                to: guestInfo.email,
                subject: `Order submition at Break Trips from ${guestInfo.fullName}`,
                html: `
                    <p>Please click on the link below to confirm your order</p>
                    <a href="${process.env.NEXT_PUBLIC_DOMAIN_NAME}/orderComplete">Confirm Order</a>
                `
            })
            res.status(200).json(res.body);
        }
        catch (error) {
            typeof window !== "undefined" && console.log(error);
            res.status(400).json(res.body);
        }
    }

}



export default errorHandler(handler);
