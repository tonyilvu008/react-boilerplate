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

      // Transition to the admin page
      transitionToAdminPage({
        pickupDateTime,
        startPlace: actualStartPlace,
        endPlace,
        contactInfo,
        carSelect,
      });
    });
  } else {
    console.error('Booking form not found in the DOM.');
  }

  // Function to update the process flow bar
  function updateProcessFlow(step) {
    const steps = document.querySelectorAll('.process-step');
    steps.forEach((stepElement, index) => {
      if (index + 1 === step) {
        stepElement.classList.add('active');
      } else {
        stepElement.classList.remove('active');
      }
    });
  }

  // Function to transition to the admin page
  function transitionToAdminPage(bookingDetails) {
    // Update the process flow bar to highlight "Confirm the order"
    updateProcessFlow(2);

    // Hide the "Car Booking" title
    const title = document.getElementById('title');
    if (title) {
      title.style.display = 'none'; // Hide the title
    }

    // Replace the form content with the admin page content
    const form = document.getElementById('bookingForm');
    form.innerHTML = `
      <h1>Admin Page</h1>
      <p>Confirm the order details below:</p>
      <div id="orderDetails">
        <p><strong>Pickup Date and Time:</strong> ${bookingDetails.pickupDateTime}</p>
        <p><strong>Start Place:</strong> ${bookingDetails.startPlace}</p>
        <p><strong>End Place:</strong> ${bookingDetails.endPlace}</p>
        <p><strong>Contact Info:</strong> ${bookingDetails.contactInfo}</p>
        <p><strong>Car Selected:</strong> ${bookingDetails.carSelect}</p>
      </div>
      
      <button id="proceedToPaymentButton">Proceed with Payment</button>
    `;

    // Add event listener for the "Proceed with Payment" button
    const proceedToPaymentButton = document.getElementById('proceedToPaymentButton');
    if (proceedToPaymentButton) {
      proceedToPaymentButton.addEventListener('click', function () {
        transitionToPaymentPage();
      });
    }
  }

  // Function to transition to the payment page
  function transitionToPaymentPage() {
    // Update the process flow bar to highlight "Choose the payment"
    updateProcessFlow(3);

    // Replace the form content with the payment page content
    const form = document.getElementById('bookingForm');
    form.innerHTML = `
      <h1>Payment Page</h1>
      <p>Choose your payment method:</p>
      <button id="completePaymentButton">Complete Payment</button>
    `;

    // Add event listener for the "Complete Payment" button
    const completePaymentButton = document.getElementById('completePaymentButton');
    if (completePaymentButton) {
      completePaymentButton.addEventListener('click', function () {
        completePayment();
      });
    }
  }

  // Function to complete the payment process
  function completePayment() {
    // Update the process flow bar to highlight "Complete"
    updateProcessFlow(4);

    // Replace the form content with the completion message
    const form = document.getElementById('bookingForm');
    form.innerHTML = `
      <h1>Payment Complete</h1>
      <p>Thank you for your booking! Your payment has been successfully processed.</p>
    `;
  }
});
