const express = require("express");

const {NoteModel} = require("../model/Note.model");

const notesRouter = express.Router();

notesRouter.get("/", (req, res) => {
  res.send("All the notes");
});



notesRouter.post("/create", async (req, res) => {
  const data = req.body
  
  try {
    const n_notes = new NoteModel(data);
    await n_notes.save();
    console.log(n_notes)
    res.send("add the note");
  } catch (err) {
    console.log(err);
    res.send({ msg: "Somthing wrong" });
  }
});
notesRouter.patch("/updated/:id", async (req, res) => {
  const payload = req.body;
  const id=req.params.id
  const note=await NoteModel.findOne({"_id":id})
  const userId_note=note.userId
  const userID_making=req.body.userId;
  try{
    if(userID_making === userId_note){
      res.send({"msg":"You are not authorized"})
    }else{
      await NoteModel.findByIdAndUpdate({"_id":id}, payload)
    res.send("updated the notes");
    }
    
  }catch(err){
    console.log("something wrong")
    console.log(err)
  }
 
});
notesRouter.delete("/delete/:id", async (req, res) => {
  
  const id=req.params.id
  const note=await NoteModel.findOne({_id:id})
  const userId_note=note.userId
  const userID_making=req.body.userId;
  try{
    if(userID_making === userId_note){
      res.send({"msg":"You are not authorized"})
    }else{
      await NoteModel.findByIdAndDelete({_id:id})
    res.send("deleted the notes");
    }
    
  }catch(err){
    console.log("something wrong")
    console.log(err)
  }
  
});

module.exports = {notesRouter};
