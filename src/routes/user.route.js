import { hello } from "../controller/user.controller.js";
import { Router } from "express";

const router = Router();

router.route("/hello").get(hello);

export default router;
