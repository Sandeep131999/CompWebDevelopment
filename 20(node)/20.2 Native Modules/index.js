const fs = require("fs");

// fs.writeFile('sandeep.txt', "node js text file write", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   }); 

fs.readFile('./sandeep.txt',"utf8",(err, data) => {
  if (err) throw err;
  console.log(data);
}); 