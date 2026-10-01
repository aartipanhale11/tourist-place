<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "booking";

// Create connection
$conn = newmysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
?>