const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., index.html)
app.use(express.static('public'));

// In-memory storage for bookings
let bookings = [];

// Endpoint to handle form submissions
app.post('/book', (req, res) => {
  const { startPlace, endPlace, contactInfo, carSelect } = req.body;

  // Save the booking to the in-memory array
  const booking = { startPlace, endPlace, contactInfo, carSelect, time: new Date().toLocaleString() };
  bookings.push(booking);

  console.log('New Booking:', booking);

  // Send a response back to the user
  res.send(`
    <h1>Booking Confirmed!</h1>
    <p><strong>Start Place:</strong> \${startPlace}</p>
    <p><strong>End Place:</strong> \${endPlace}</p>
    <p><strong>Contact Info:</strong> \${contactInfo}</p>
    <p><strong>Car Selected:</strong> \${carSelect}</p>
    <a href="/">Go Back</a>
  `);
});

// Admin page to view all bookings
app.get('/admin', (req, res) => {
  let html = `
    <h1>All Bookings</h1>
    <table border="1" cellpadding="10" cellspacing="0">
      <thead>
        <tr>
          <th>#</th>
          <th>Start Place</th>
          <th>End Place</th>
          <th>Contact Info</th>
          <th>Car Selected</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
  `;

  // Add each booking to the table
  bookings.forEach((booking, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${booking.startPlace}</td>
        <td>${booking.endPlace}</td>
        <td>${booking.contactInfo}</td>
        <td>${booking.carSelect}</td>
        <td>${booking.time}</td>
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
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:\${port}`);
});
