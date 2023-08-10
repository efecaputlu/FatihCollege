<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $first_name = $_POST["first_name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "fatihcollege23@gmail.com";

    // Set email subject
    $subject = "New Contact Form Submission: $first_name $surname";

    // Compose email message
    $email_message = "First Name: $first_name\n";
    $email_message .= "Surname: $surname\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Set additional email headers
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $email_message, $headers);

    // Redirect back to the form page or show a success message
    header("Location: /ThankYou.html");
    exit;
}
?>
