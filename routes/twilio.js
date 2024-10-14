import {Router} from "express"
import { twilioVerify } from "../controllers/twilio.js";

const twilioRouter = Router();

twilioRouter.post("/twilio-verify", twilioVerify)


export default twilioRouter;