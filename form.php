<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';


if(isset($_POST['email']) && ($_POST['phone'])){
		$response = [];

		$message = "You've a new response in your Enquiry Form";
		$message.="<ul>";
		foreach($_POST as $p_key => $p_value){
			
			$message.= "<li><h4><strong>{$p_key}</strong>: {$p_value}<h4></li>";
		}
        $message.="</ul>";
$mail = new PHPMailer(true);

 //Server settings
 $mail->SMTPDebug = 0; 
 $mail->isSMTP();                             
 $mail->Host       = 'smtp.hostinger.com';    
 $mail->SMTPAuth   = true;                           
 $mail->Username   = 'info@ominfragroup.com';           
 $mail->Password   = 'System@123';                          
 $mail->SMTPSecure = 'ssl';          
 $mail->Port       = 465;                            

 //Recipients
 $mail->setFrom('info@ominfragroup.com', 'Enquiry from website');
 $mail->addAddress('info@ominfragroup.com');    
 
 //Content
 $mail->isHTML(true);                               
 $mail->Subject = 'Request for enquiry by ' . $_POST['name'];
 $mail->Body    = $message;

 if ($mail->send())
			{
                echo "Thank you, We'll get in touch with you soon";
			}
			else
			{
                echo'Something went wrong';
			}

	}
?>