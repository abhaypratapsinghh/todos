const jwt = require("jsonwebtoken");

const secret = "black_pearl";


const authentication = async function (req, res, next) { 
    const token = req.headers.authentication;
    try {
        const verify = await jwt.verify(token, secret);
    
        if (verify) {
            next();
        }
    }
    catch (err) { 
        res.json({
            msg: "user not registered",
        })
    }
    

}

module.exports = { authentication: authentication };