import jwt from "jsonwebtoken";

export default function authRequiredMW(req, res, next) {
    const accessToken = req.headers["authorization"]?.split(" ")[1];

    if(!accessToken) return res.sendStatus(401);

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(401);
        
        req.username = decoded.username;
        next();
    });
}