<?php
session_start();

// Check if booking details are set in the session
if (!isset($_SESSION['bookingDetails'])) {
    header("Location: index.html"); // Redirect to the form if no booking details
    exit();
}

$bookingDetails = $_SESSION['bookingDetails'];
$process_step = isset($_SESSION["process_step"]) ? $_SESSION["process_step"] : 1;

// ... database connection code ...

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM orders ORDER BY created_at DESC";
    $stmt = $conn->query($sql);
    $bookings = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Generate the HTML for the admin page
    $html = "<h1>Admin Page</h1>";
    $html .= "<p>Confirm and edit your order details below:</p>";
    $html .= "<div id='orderDetails'>";
    $html .= "<div><label>Pickup Date and Time:</label> " . htmlspecialchars($bookingDetails['pickupDateTime']) . "</div>";
    $html .= "<div><label>Start Place:</label> " . htmlspecialchars($bookingDetails['startPlace']) . "</div>";
    $html .= "<div><label>End Place:</label> " . htmlspecialchars($bookingDetails['endPlace']) . "</div>";
    $html .= "<div><label>Contact Info:</label> " . htmlspecialchars($bookingDetails['contactInfo']) . "</div>";
    $html .= "<div><label>Car Selected:</label> " . htmlspecialchars($bookingDetails['carSelect']) . "</div>";
    $html .= "<div><label>Passenger Number:</label> " . htmlspecialchars($bookingDetails['passengerNumber']) . "</div>";
    $html .= "<div><label>Price:</label> " . htmlspecialchars($bookingDetails['price']) . "</div>";
    $html .= "</div>";

    $html .= "<a href='payment.php'>Proceed to Payment</a>";

    echo $html;

} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>

<!-- Process Flow Bar (Update based on $process_step) -->
<div class="process-flow">
    <span class="process-step <?php if ($process_step == 1) echo 'active'; ?>">Fill the form</span>
    <span class="process-step <?php if ($process_step == 2) echo 'active'; ?>">Confirm the order</span>
    <span class="process-step <?php if ($process_step == 3) echo 'active'; ?>">Choose the payment</span>
    <span class="process-step <?php if ($process_step == 4) echo 'active'; ?>">Complete</span>
</div>
