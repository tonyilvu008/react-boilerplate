const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); // Import MySQL library
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., index.html)
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Create a connection pool to the MySQL database
const db = mysql.createPool({
  host: 'localhost', // Replace with your MySQL host
  user: 'tao.zhao',      // Replace with your MySQL username
  password: 'ZtSr19850515',      // Replace with your MySQL password
  database: 'car_booking', // Replace with your database name
});

// Test the database connection
db.getConnection((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

// Endpoint to handle form submissions
app.post('/book', (req, res) => {
  console.log(req.body); // Log the received data
  const { pickupDateTime, startPlace, endPlace, contactInfo, carSelect, passengerNumber,
    price } = req.body;

  // Insert the booking into the database
  const query = `
    INSERT INTO orders (pickupDateTime, startPlace, endPlace, contactInfo, carSelect, passengerNumber,
    totalPrice)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  debugger; // Execution will pause here
  console.log("Already inserted!")
  const values = [pickupDateTime, startPlace, endPlace, contactInfo, carSelect, passengerNumber,
    price];

  db.query(query, values, (err, result) => {
    debugger; // Execution will pause here
    if (err) {
      console.error('Error inserting booking:', err);
      res.status(500).send('Error saving booking. Please try again.');
    } else {
      console.log('New Booking ID:', result.insertId);

      // Send a response back to the user
      res.send(`
        <h1>Booking Confirmed!</h1>
        <p><strong>Pickup Date and Time:</strong> ${pickupDateTime}</p>
        <p><strong>Start Place:</strong> ${startPlace}</p>
        <p><strong>End Place:</strong> ${endPlace}</p>
        <p><strong>Contact Info:</strong> ${contactInfo}</p>
        <p><strong>Car Selected:</strong> ${carSelect}</p>
        <p><strong>Passenger Number:</strong> ${passengerNumber}</p>
        <p><strong>TotalPrice:</strong> ${price}</p>
        <a href="/">Go Back</a>
      `);
    }
  });
});

// API endpoint to fetch all bookings
app.get('/api/bookings', (req, res) => {
  const query = 'SELECT * FROM orders ORDER BY created_at DESC';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).send('Error fetching bookings. Please try again.');
    } else {
      res.json(results); // Return the bookings as JSON
    }
  });
});

// Admin page to view all bookings
app.get('/admin', (req, res) => {
  const query = 'SELECT * FROM orders ORDER BY created_at DESC';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching bookings:', err);
      res.status(500).send('Error fetching bookings. Please try again.');
    } else {
      let html = `
      <h1>All Bookings</h1>
        <table border="1" cellpadding="10" cellspacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Pickup Date and Time</th>
              <th>Start Place</th>
              <th>End Place</th>
              <th>Contact Info</th>
              <th>Car Selected</th>
              <th>Passenger Number</th>
              <th>Total Price</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
      `;

      // Add each booking to the table
      results.forEach((booking, index) => {
        html += `
          <tr>
            <td>${index + 1}</td>
            <td>${booking.pickupDateTime}</td>
            <td>${booking.startPlace}</td>
            <td>${booking.endPlace}</td>
            <td>${booking.contactInfo}</td>
            <td>${booking.carSelect}</td>
            <td>${booking.passengerNumber}</td>
            <td>${booking.totalPrice}</td>
            <td>${booking.created_at}</td>
          </tr>
        `;
      });

      html += `
          </tbody>
        </table>
        <a href="/">Go Back</a>
      `;

      // Send the HTML response
      res.send(html);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
