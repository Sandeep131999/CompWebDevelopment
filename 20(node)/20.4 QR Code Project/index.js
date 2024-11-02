
// 1. Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.'
import qr from 'qr-image' 
// 3. Create a txt file to save the user input using the native fs node module.
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"Type in your URL :",
        name:"URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    let qrSvg = qr.image(url);
    qrSvg.pipe(fs.createWriteStream('qr_img.jpeg'));
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
  })
  .catch((error) => {
  });


