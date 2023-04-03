const express = require("express");
const cors=require("cors")
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.route");
const { notesRouter } = require("./routes/Note.route");
const { authenticate } = require("./Middlewares/authentications.middlewares");
const app = express();
const port = 5040;

app.use(cors({
  origin:"*"
}))
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mag: "first file" });
});

app.use("/users", userRouter);
app.use(authenticate);
app.use("/notes", notesRouter);

// app.get("/about", (req, res) => {
//     const token=req.headers.authorization;
//     jwt.verify(token, 'sonu', (err, decoded) => {
//         if(err){
//             res.send("invalid token")
//         }else{
//             res.send("about page")
//         }
//       });

// })

app.listen(port, async () => {
  try {
    await connection;
    console.log("port successfull");
  } catch (err) {
    console.log("somthing wrong");
  }
});
