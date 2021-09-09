<?php
$nameErr = $submit_emailErr = $mobile_numberErr = $subjectErr =  "";
$name = $submit_email = $mobile_number = $subject = "";
if($_SERVER["REQUEST_METHOD"] == "POST")
{
  (empty($_POST['name'])){
    $nameErr = "Name is Required";
  }
  else{
    $name = test_input ($_POST['name']);
  }
  (empty($_POST['email'])){
    $submit_emailErr = "Email is Required";
  }
  else{
    $submit_email = test_input ($_POST['email']);
  }
  (empty($_POST['number'])){
    $mobile_numberErr = "Number is Required";
  }
  else{
    $number = test_input ($_POST['number']);
  }
  (empty($_POST['subject'])){
    $subjectErr = "subject is Required";
  }
  else{
    $subject = test_input ($_POST['subject']);
  }

}
function test-input($data){
  $data = trim( $data);
  $data = stripslashes( $data);
  $data = htmlspecialchars( $data);
return $data;
}

$name = $_POST['name'];
$submit_email = $_POST['email'];
$mobile_number = $_POST['number'];
$subject = $_POST['subject'];
$comment = $_POST['comment'];

$email_from = 'https://priyadharshini0603.github.io/Projects/College%20Website/clg-website-email.html';

$to = 'pd999796@gmail.com';

$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $submit_email \r\n";

$email_subject = 'New Form Submission';

$_email_body = "User Name: $name.\n".
                "User Email: $submit_email.\n".
                "User Name: $mobile_number.\n".
                "User Name: $subject.\n".
                "User Name: $comment.\n".

  mail($to,$email_subject,$_email_body, $headers);

  header("Location: clg-website-email.html");
?>
