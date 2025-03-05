// Handle form submission for booking
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Get form values
    const startPlace = document.getElementById('startPlace').value;
    const endPlace = document.getElementById('endPlace').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const carSelect = document.getElementById('carSelect').value;
  
    // Send the data to the server using fetch (AJAX)
    fetch('/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ startPlace, endPlace, contactInfo, carSelect }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Get the response as plain text
      })
      .then((data) => {
        // Display the response below the form
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
          <h3>Booking Confirmed!</h3>
          <p><strong>Start Place:</strong> ${startPlace}</p>
          <p><strong>End Place:</strong> ${endPlace}</p>
          <p><strong>Contact Info:</strong> ${contactInfo}</p>
          <p><strong>Car Selected:</strong> ${carSelect}</p>
        `;
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the booking.');
      });
  });
  