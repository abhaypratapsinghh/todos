const jwt = require("jsonwebtoken");

const secret = "black-pearl";


const { signupSchema } = require('./types');

const signup = async  function (req, res, next) {
    const signupPayload = req.body;
    const parsedPayload = signupSchema.safeParse(signupPayload);
    
    if (!parsedPayload) {
        res.status(404).json({
            msg:"Enter valid username and password"
        })
    }
    else {
        try {
            const username = signupPayload.username;
            const password = signupPayload.password;
            const token = await jwt.sign({ username, password},secret);

            res.status(200).json({
                token: token,
                msg:"user created successfully"
            })
        
        }
        catch (err) {
            console.log(err);
            res.json({
                msg: err
            })
        }
       
    }
};

module.exports = {
    signup
}