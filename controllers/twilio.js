// const client = require('twilio')(accountSid, authToken);
import twilio from "twilio"
const sid = ""
const token = ""
const twilioClient = twilio(sid, token);
export const twilioVerify = (req, res, next) => {
    const { phoneNumber } = req.body;

    try {
        twilioClient.messages
        .create({
            body: 'Hello from twilio-node',
            to: phoneNumber,
            from: '+19096395779'
        })
        .then((message) => {
            return res.status(200).json({
                message: `Sent ${message}`,
                status: true
            })
        });
    } catch (error) {
        return res.status(200).json({
            message: "Internal server error",
            status: false
        })
    }
}