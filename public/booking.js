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

    // Update the URL to reflect the admin page
    history.pushState({ page: 'admin', bookingDetails }, 'Admin Page', '/admin');

    // Hide the "Car Booking" title
    const title = document.getElementById('title');
    if (title) {
      title.style.display = 'none'; // Hide the title
    }

    // Replace the form content with the admin page content
    const form = document.getElementById('bookingForm');
    form.innerHTML = `
    <h1>Admin Page</h1>
    <p>Confirm and edit your order details below:</p>
    <div id="orderDetails">
      <div>
        <label for="editPickupDateTime"><strong>Pickup Date and Time:</strong></label>
        <input type="datetime-local" id="editPickupDateTime" value="${bookingDetails.pickupDateTime}">
      </div>
      <div>
        <label for="editStartPlace"><strong>Start Place:</strong></label>
        <input type="text" id="editStartPlace" value="${bookingDetails.startPlace}">
      </div>
      <div>
        <label for="editEndPlace"><strong>End Place:</strong></label>
        <input type="text" id="editEndPlace" value="${bookingDetails.endPlace}">
      </div>
      <div>
        <label for="editContactInfo"><strong>Contact Info:</strong></label>
        <input type="text" id="editContactInfo" value="${bookingDetails.contactInfo}">
      </div>
      <div>
        <label for="editCarSelect"><strong>Car Selected:</strong></label>
        <input type="text" id="editCarSelect" value="${bookingDetails.carSelect}" readonly>
        <button type="button" onclick="navigateToCarSelection()">Change Car</button>
      </div>
    </div>
    <button id="saveChangesButton">Save Changes</button>
    <button id="backButton">Back</button>
    <button id="proceedToPaymentButton">Proceed with Payment</button>
  `;
  // Add event listener for the "Save Changes" button
  const saveChangesButton = document.getElementById('saveChangesButton');
  if (saveChangesButton) {
    saveChangesButton.addEventListener('click', function () {
      // Save the updated details
      const updatedDetails = {
        pickupDateTime: document.getElementById('editPickupDateTime').value,
        startPlace: document.getElementById('editStartPlace').value,
        endPlace: document.getElementById('editEndPlace').value,
        contactInfo: document.getElementById('editContactInfo').value,
        carSelect: document.getElementById('editCarSelect').value,
      };

      // Update the booking details in the state
      history.replaceState({ page: 'admin', bookingDetails: updatedDetails }, 'Admin Page', '/admin');

      alert('Changes saved successfully!');
    });
  }

    // Add event listener for the "Back" button
    const backButton = document.getElementById('backButton');
    if (backButton) {
      backButton.addEventListener('click', function () {
        history.back(); // Go back to the previous page
      });
    }

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
    // Update the URL to reflect the payment page
    history.pushState({ page: 'payment' }, 'Payment Page', '/payment');

    // Replace the form content with the payment page content
    const form = document.getElementById('bookingForm');
    form.innerHTML = `
      <h1>Payment Page</h1>
      <p>Choose your payment method:</p>
      <div id="paypal-button-container"></div>
      <button id="backButton">Back</button>
      <button id="completePaymentButton">Complete Payment</button>
    `;

    // Add event listener for the "Back" button
    const backButton = document.getElementById('backButton');
    if (backButton) {
      backButton.addEventListener('click', function () {
        history.back(); // Go back to the previous page
      });
    }
     // Render the PayPal button
    renderPayPalButton();
    function renderPayPalButton() {
      paypal.Buttons({
        createOrder: function (data, actions) {
          // Set up the transaction
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '100.00' // Replace with the actual amount
              }
            }]
          });
        },
        onApprove: function (data, actions) {
          // Capture the funds from the transaction
          return actions.order.capture().then(function (details) {
            // Show a success message to the buyer
            alert('Transaction completed by ' + details.payer.name.given_name);
    
            // Transition to the payment completion page
            completePayment();
          });
        },
        onError: function (err) {
          // Handle errors
          console.error('PayPal error:', err);
          alert('An error occurred during the payment process. Please try again.');
        }
      }).render('#paypal-button-container'); // Display the PayPal button in the container
    }

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

    // Update the URL to reflect the completion page
    history.pushState({ page: 'complete' }, 'Payment Complete', '/complete');

    // Replace the form content with the completion message
    const form = document.getElementById('bookingForm');
    form.innerHTML = `
      <h1>Payment Complete</h1>
      <p>Thank you for your booking! Your payment has been successfully processed.</p>
      <button id="backButton">Back</button>
    `;

    // Add event listener for the "Back" button
    const backButton = document.getElementById('backButton');
    if (backButton) {
      backButton.addEventListener('click', function () {
        history.back(); // Go back to the previous page
      });
    }
  }

  // Handle back and forward navigation
  window.addEventListener('popstate', function (event) {
    if (event.state) {
      const page = event.state.page;
      const bookingDetails = event.state.bookingDetails;

      if (page === 'admin') {
        transitionToAdminPage(bookingDetails);
      } else if (page === 'payment') {
        transitionToPaymentPage();
      } else if (page === 'complete') {
        completePayment();
      } else {
        // Default to the booking form
        window.location.reload();
      }
    }
  });
});
