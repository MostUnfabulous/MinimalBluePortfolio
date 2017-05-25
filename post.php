<? php

if( isset($_POST) ){
$name = $_POST['Fname'];
$email = $_POST['email'];
$message = $_POST['message'];

$from = $name;
$to = 'haydenbsmith@gmail.com';
$subject = 'Message from Contact Demo ';

$body = "From: $name\n E-Mail: $email\n Message:\n $message";

}
?>
