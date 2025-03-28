<?php
session_start(); // Start the session

// Retrieve the process step from the session
if(isset($_SESSION["process_step"])) {
    $process_step = $_SESSION["process_step"];
} else {
    $process_step = 1; // Default value
}

// Set the process step to 4 (Complete)
$_SESSION["process_step"] = 4;

// Display the payment complete message
echo "<h1>Payment Complete</h1>";
echo "<p>Thank you for your booking!</p>";

?>

<!-- Process Flow Bar (Update based on $process_step) -->
<div class="process-flow">
    <span class="process-step <?php if ($process_step == 1) echo 'active'; ?>">Fill the form</span>
    <span class="process-step <?php if ($process_step == 2) echo 'active'; ?>">Confirm the order</span>
    <span class="process-step <?php if ($process_step == 3) echo 'active'; ?>">Choose the payment</span>
    <span class="process-step <?php if ($process_step == 4) echo 'active'; ?>">Complete</span>
</div>
