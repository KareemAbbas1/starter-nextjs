import errorHandler, { createError } from "../../../middlewares/errorsMiddleware";
import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();



async function handler(req, res) {

    const { method } = req;

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
                from: `mail sent to <${req.body.email}>`,
                to: process.env.user,
                subject: `${req.body.language === "English" ? "Message from" : "رسالة من"} ${req.body.name}`,
                html: `
                <div dir=${
                    req.body.language === "English"
                    ? "ltr"
                    : "rtl"
                  }
                >
                    <p dir=${
                        req.body.language === "English"
                        ? "ltr"
                        : "rtl"
                    }
                    >
                        ${req.body.message}
                    </p>
                    <address>
                    ${
                        req.body.language === "English"
                        ? `To reply to this message click on this link ➡`
                        : `  لللرد على هذه الرسالة اضغط على هذا الرابط  ⬅`
                    }  <a href="mailto:${req.body.email}">
                    ${req.body.email}
                    </a>
                    </address>
                </div>
                `
            });
            res.status(200).json(res.body);
        }
        catch (error) {
            alert(error)
            res.status(400).json(res.body);
        }
    }
};


export default errorHandler(handler);