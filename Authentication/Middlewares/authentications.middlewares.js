const jwt=require("jsonwebtoken")

const authenticate=(req, res, next) => {
    const token=req.headers.authorization
    if(token){
        const decoded=jwt.verify(token, "sonu")
        if(decoded){
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