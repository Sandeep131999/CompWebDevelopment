// Importing required modules
import express from "express"; // Importing Express to create a server and handle routes
import bodyParser from "body-parser"; // Importing body-parser to parse incoming request bodies
import { dirname } from "path"; // Importing dirname to get the directory path
import { fileURLToPath } from "url"; // Importing fileURLToPath to convert URL to path

// Getting the directory name of the current module file
const __dirname = dirname(fileURLToPath(import.meta.url)); // Helps in locating the current directory path of the file

// Creating an instance of an Express app
const app = express();
const port = 3000; // Defining the port the server will listen to

// Middleware to parse URL-encoded data (from HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the main page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // Sends the index.html file from the /public folder
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  console.log(req.body); // Logs the form data sent by the client to the server console
});

// Server listening on the defined port
app.listen(port, () => {
  console.log(`Listening on port ${port}`); // Console message to confirm the server is running
});
