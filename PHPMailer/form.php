<?php

header('Content-Type:application/json');
// require_once ("includes/PHPMailer/PHPMailer.php");
// require_once ("includes/PHPMailer/SMTP.php");
// require_once ("includes/PHPMailer/Exception.php");
require_once('includes/Mail/PHPMailerAutoload.php');
use PHPMailer\PHPMailer\PHPMailer;

if(isset($_POST['email']) && ($_POST['contact'])){
	print_r($_POST);
    echo "entered the condition";
		$response = [];

		$message = "You've a new response in your Enquiry Form";
		$message.="<ul>";
		foreach($_POST as $p_key => $p_value){
			
			$message.= "<li><h4><strong>{$p_key}</strong>: {$p_value}<h4></li>";
		}
        $message.="</ul>";
		// $mail = new PHPMailer();

		// $mail->Host       = localhost;

		// $mail->SMTPAuth   = false; 

		

		// $mail->SMTPAutoTLS = FALSE;

		// $mail->Port       = 25;
		

		// // FOR HOSTING

		$mail = new PHPMailer();
		$mail->isSMTP();
		$mail->SMTPDebug = 3;
		$mail->Host = 'smtp.hostinger.com';
		$mail->SMTPAuth = true;
		$mail->Username = 'info@ominfragroup.com';
		$mail->Password = 'System@123';
		$mail->port = 587;
	

		$mail->isHTML(true);
		$mail->setFrom('info@ominfragroup.com', 'Enquiry from website');
        // Don't use this, might trigger into spam
		$mail->addAddress("mywebsiteauth1@gmail.com"); // replace with company email
		// $mail->addCC("naikpuja92@gmail.com");
		
		$mail->Subject = 'Request for enquiry by ' .  $_POST['name'];
		$mail->Body = $message;

		
			if ($mail->send())
			{
				$response['status'] = true;
				$response['data'] = "Thank you, We'll get in touch with you soon";

			}
			else
			{
				$response['status'] = false;
				$response['data'] = "Something went wrong";

			}
		
		echo json_encode($response); // status = false and data = 'error'
	}
?>