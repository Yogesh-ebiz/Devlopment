import {Router} from "express"
import twilioRouter from "./twilio.js";

const baseRouter = Router();

baseRouter.use("/twilio", twilioRouter)

export default baseRouter;