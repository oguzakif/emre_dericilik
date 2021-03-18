<?php 
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $userMessageSubject = $_POST['subject'];
    $userMessage = $_POST['message'];


    $email_from ="Emre Modern Dericilik";


   

    $to = "info@emremoderndericilik.com";
    $body = "";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-to: $userEmail \r\n";
    $body = "İsim: $userName.\n".
            "Email: $userEmail.\n".
            "Mesaj: $userMessage.\n";

    mail($to, $userMessageSubject, $body, $headers);

    header("location: contact.html");

?>
