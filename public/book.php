<?php
session_start();

$host = "localhost";
$dbname = "if0_38502513_car_booking";
$username = "if0_38502513";
$password = "6HrysgzrC2eY";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pickupDateTime = $_POST['pickupDateTime'];
    $startPlace = $_POST['startPlace'];
    $endPlace = $_POST['endPlace'];
    $contactInfo = $_POST['contactInfo'];
    $carSelect = $_POST['carSelect'];
    $passengerNumber = $_POST['passengerNumber'];
    $totalPrice = $_POST['price'];
// Price calculation logic (moved from JavaScript)
    $price = 0;
    $priceMatrix = [
        'Narita Airport' => [
            'Tokyo 23 Districts' => 15600,
            'Fujisan/Hakone/Kamakura' => 41000,
        ],
        'Haneda Airport' => [
            'Tokyo 23 Districts' => 11000,
            'Fujisan/Hakone/Kamakura' => 32000,
        ],
        'Tokyo 23 Districts' => [
            'Fujisan/Hakone/Kamakura' => 32000,
            'Disney' => 11000,
            'Kamakura (10 hours)' => 45000,
            'Fujisan/Hakone (10 hours)' => 51000,
            'Karuizawa/Niko' => 61000,
        ],
    ];

    if (isset($priceMatrix[$startPlace][$endPlace])) {
        $price = $priceMatrix[$startPlace][$endPlace];
    } else {
        // Handle the case where the price is not found
        echo "Sorry, we do not have a price for that route. Please add wechat on right top to ask the price!";
        exit(); // Stop the script
    }
    $sql = "INSERT INTO orders (pickupDateTime, startPlace, endPlace, contactInfo, carSelect, passengerNumber, totalPrice)
            VALUES (:pickupDateTime, :startPlace, :endPlace, :contactInfo, :carSelect, :passengerNumber, :totalPrice)";

    $stmt = $conn->prepare($sql);
    $stmt->execute([
        ':pickupDateTime' => $pickupDateTime,
        ':startPlace' => $startPlace,
        ':endPlace' => $endPlace,
        ':contactInfo' => $contactInfo,
        ':carSelect' => $carSelect,
        ':passengerNumber' => $passengerNumber,
        ':totalPrice' => $totalPrice
    ]);

    // Set session variables
    $_SESSION['bookingDetails'] = [
        'pickupDateTime' => $pickupDateTime,
        'startPlace' => $startPlace,
        'endPlace' => $endPlace,
        'contactInfo' => $contactInfo,
        'carSelect' => $carSelect,
        'passengerNumber' => $passengerNumber,
        'price' => $totalPrice
    ];
    $_SESSION["process_step"] = 2;

    // Redirect to the admin page
    header("Location: admin.php");
    exit();

} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
