import express from 'express';
const app = express();
const port = 4000;

//GET    -> Request Service
//POST   -> Sending Resource
//PUT    -> Replace resource (Update)
//PATCH  -> Patch up a resource (Update)
//DELETE -> Delete a resource (Delete)



app.get('/', (req, res) => {
    res.send('<h1>Hello </h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>');
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me </h1><p> Phone : 9206754274 </p>");
});

app.listen(port, () =>{
    console.log("server running on port 4000.")
});




