import express from "express";

import authRequiredMW from "../middlewares/authRequiredMW.js";

import authRegister from "../controllers/authRegister.js";
import authLogin from "../controllers/authLogin.js";
import authCheck from "../controllers/authCheck.js";
import authLogout from "../controllers/authLogout.js";
import authToken from "../controllers/authToken.js";

const router = express.Router();

router
 .post("/register", authRegister)
 .post("/login", authLogin)
 .get("/user", authRequiredMW, authCheck)
 .post("/token", authToken)
 .delete("/logout", authRequiredMW, authLogout);

export default router;