import { hello } from "../controller/user.controller.js";

const { Router } = require("express");

const router = Router();

router.route("/hello").get(hello);

export default router;
