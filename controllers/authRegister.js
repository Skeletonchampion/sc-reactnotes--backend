import User from "../models/User.js";

export default async function authRegister(req, res, next) {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        
        if(username.length < 4) return res.json({err: "Username's length need to be larger than 4!"});
        if(password.length < 6) return res.json({err: "Password's length need to be larger than 6!"});

        if(user) {
            return res.json({err: "This username's already be taken!"});
        }
        
        await User.create(req.body);
        res.json({message: "Successfully Registered!"});
    }
    catch(err) {
        console.error(err);
    }
}