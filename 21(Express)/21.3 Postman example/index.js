import express from "express";
const app = express();
const port = 2000;

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>');
});

app.post("/Register",(req,res)=>{
    res.sendStatus(201);
});

//Update the complete resorces
app.put("/User/Sandeep",(req,res)=>{
    res.sendStatus(200);
});

//Update the particular resorces
app.patch("/User/Sandeep",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/Register",(req,res)=>{
    res.sendStatus(200);
});


app.listen(port, () =>{
    console.log(`server running on port ${port}`);
});
