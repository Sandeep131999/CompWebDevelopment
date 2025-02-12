import express from "express";

const app = express();
const port = 2000;

function logger(req, res, next) {
 console.log("request: " + req.url);
 console.log("method: " + req.method);
 next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
