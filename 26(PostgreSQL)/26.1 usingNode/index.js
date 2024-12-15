import { Client } from 'pg'; // Correctly import the Client class

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "admin",
  port: 5432, // Ensure port is a number
});

// Connect to the database
db.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => {
    console.error('Connection error:', err.stack);
    process.exit(1); // Exit if connection fails
  });

// Query the database
db.query("SELECT * FROM m_employee")
  .then(res => {
    console.log("User data:", res.rows);
  })
  .catch(err => {
    console.error("Error executing query:", err.stack);
  })
  .finally(() => {
    db.end(); // Close the connection
  });
