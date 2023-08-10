<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recipient email address
    $to = "fatihcollege23@gmail.com";

    // Subject for the email
    $subject = "New Student Form Submission : {$_POST["first_name"]} {$_POST["surname"]}";

    // Email message with form data
    $message = "STUDENT DETAILS:\n";
    $message .= "First Name: " . $_POST["first_name"] . "\n";
    $message .= "Surname: " . $_POST["surname"] . "\n";
    $message .= "Date of Birth: " . $_POST["date_of_birth"] . "\n";
    $message .= "Place of Birth: " . $_POST["place_of_birth"] . "\n\n";
    $message .= "Current School: " . $_POST["current_school"] . "\n";
    $message .= "Current Class: " . $_POST["current_class"] . "\n";
    if ($_POST["preferred_class"] === "Other") {
        $message .= "Preferred Class: " . $_POST["preferred_class_other"] . "\n";
    } else {
        $message .= "Preferred Class: " . $_POST["preferred_class"] . "\n";
    }

    $message .= "\nHow did you learn about Fatih College?\n";
    if (isset($_POST["learning_source"])) {
        $learning_sources = $_POST["learning_source"];
        foreach ($learning_sources as $source) {
            if ($source === "Other") {
                $message .= $_POST["learning_source_other"] . "\n";
            } else {
                $message .= $source . "\n";
            }
        }
    }

    $message .= "PARENT DETAILS:\n";
    $message .= "Father's Name: " . $_POST["father_name"] . "\n";
    $message .= "Father's Occupation: " . $_POST["father_occupation"] . "\n";
    $message .= "Father's Phone Number: " . $_POST["father_phone"] . "\n";
    $message .= "Mother's Name: " . $_POST["mother_name"] . "\n";
    $message .= "Mother's Occupation: " . $_POST["mother_occupation"] . "\n";
    $message .= "Mother's Phone Number: " . $_POST["mother_phone"] . "\n";
    $message .= "Area Name, City, Region: " . $_POST["area_city_region"] . "\n\n";
    

    // Send email
    mail($to, $subject, $message, $headers);

    // Redirect User to /ThankYou.html
    header("Location: /ThankYou.html");
    exit;
}
?>
