import bcrypt from "bcrypt";

import User from "../models/User.js";

import { generateAccessToken, generateRefreshToken } from "../utils/generateToken.js";

export default async function authLogin(req, res) {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        
        if(!user) return res.json({err: "Wrong username or password!"});

        bcrypt.compare(password, user.password, (err, same) => {
            if(err) console.error(err);

            if(!same) return res.json({err: "Wrong username or password!"});

            const myUser = {
                username: user.username,
                date: user.date
            }
            const accessToken = generateAccessToken(myUser);
            const refreshToken = generateRefreshToken(myUser);

            res.cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: "none", secure: true });
            res.cookie("isLogged", true, { httpOnly: false, sameSite: "none", secure: true });

            res.json({accessToken});
        });
    }
    catch(err) {
        throw new Error(err);
    }
}