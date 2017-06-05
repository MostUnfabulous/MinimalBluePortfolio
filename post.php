<?php


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$from = $name;
$to = 'haydenbsmith@gmail.com';
$subject = 'Message from Contact Demo ';

$body = "From: $name\n E-Mail: $email\n Message:\n $message";
$headers = "From: $email_from \r\n";
//Send the email!
mail($to,$subject,$body,$headers);
//done. redirect to thank-you page.
header('Location: index.html');
?>
