// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  // Handle form submission for booking
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from refreshing the page

      // Get form values
      const pickupDateTime = document.getElementById('pickupDateTime').value;
      const startPlace = document.getElementById('startPlace').value;
      const customStartPlace = document.getElementById('customStartPlace').value;
      const endPlace = document.getElementById('endPlace').value;
      const contactInfo = document.getElementById('contactInfo').value;
      const carSelect = document.getElementById('carSelect').value;

      // Determine the actual start place
      const actualStartPlace = startPlace === 'Other' ? customStartPlace : startPlace;

      // Validate form inputs
      if (!pickupDateTime || !actualStartPlace || !endPlace || !contactInfo || !carSelect) {
        alert('Please fill out all fields before submitting.');
        return;
      }

      // Send the data to the server using fetch (AJAX)
      fetch('/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pickupDateTime,
          startPlace: actualStartPlace,
          endPlace,
          contactInfo,
          carSelect,
        }),
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
            <p><strong>Pickup Date and Time:</strong> ${pickupDateTime}</p>
            <p><strong>Start Place:</strong> ${actualStartPlace}</p>
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
  } else {
    console.error('Booking form not found in the DOM.');
  }
});
