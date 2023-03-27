
const express=  require('express');

const {UserModel} = require("./model/User.model")
const jwt=require("jsonwebtoken")

const {connection}=require('./configs/db');
const { response } = require('express');
const app=express()

const port=5040;
app.use(express.json())
app.get('/', (req, res) => {
    res.json({mag:"first file"})
})

app.get("/sing", async(request, response) => {
    const payload=request.body
    try{
        const user=await UserModel.find(payload);
        // await user.seve()
        response.send(user)
    }catch(err) {
        console.log("something rwong")
        console.log(err)
    }
    // const {name, email, pass, number} = request.body;
    // response.json("sing page")
})

app.post("/sing", async(request, response) => {
    const payload=request.body
    try{
        const user=new UserModel(payload)
        await user.save()
        response.send("sing page")
    }catch(err) {
        console.log("something rwong");
        console.log(err)
    }
    
})

app.get("/login", async (requset, response) => {
    const data=requset.body
    try{
        const user= await UserModel.find()
        response.send(user)
    }catch(err){
        console.log("error")
        console.log(err)
    }
})
app.post('/login', async (request, response) => {
    const {email, pass}=request.body
    try{
       const user=await UserModel.find({email, pass})
       const token = jwt.sign({ course: 'backend' }, 'sonu');
    //    await user.save()
    if(user.length>0){
        response.json({"msg":"login successfull", "token":token})
    }else{
        response.send("rwong creatensial", )
    }

    }catch(err){
        console.log("error")
        console.log(err)
    }
   
})

app.get("/about", (req, res) => {
    const token=req.headers.authorization;
    jwt.verify(token, 'sonu', (err, decoded) => {
        if(err){
            res.send("invalid token")
        }else{
            res.send("about page")
        }
      });




    
    
})
app.get("/contact", (req, res) => {
    const token=req.query.token;
    jwt.verify(token, 'sonu', (err, decoded) => {
        if(err){
            res.send("invalid token")
        }else{
            res.send("contact page")
        }
      });
})
app.get("/data", (req, res) => {
    res.send("data page")
})
app.listen(port, async() => {
    try{
        await connection
        console.log("port successfull")
    }catch(err){
        console.log("somthing wrong")
    }
    
})