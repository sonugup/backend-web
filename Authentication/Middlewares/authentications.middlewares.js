const jwt=require("jsonwebtoken")
require('dotenv').config()
const authenticate=(req, res, next) => {
    const token=req.headers?.authorization?.split(" ")[1]
    if(token){
        const decoded=jwt.verify(token, process.env.key)
        if(decoded){
            const userID=decoded.userID
            console.log(decoded)
            req.body.userId=userID
            next()
        }else{
            res.send("Loging First")
        }
    }else{
        res.send("Login First")
    }
}

module.exports={
    authenticate
}