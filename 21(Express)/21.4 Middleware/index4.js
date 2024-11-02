import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));

function toGetTheBandName(req, res, next){
 bandName = req.body["street"] + ' ' + req.body["pet"];
  next();
}

app.use(toGetTheBandName);

app.get('/', (req, res) => {
  res.sendFile(_dirname +'/public/index.html');
});

app.post('/submit', (req, res) => {
  res.send(`<h1>${bandName}</h1>`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

