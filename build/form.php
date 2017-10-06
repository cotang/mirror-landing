<?php header("Content-Type: text/html; charset=utf-8");?>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<?php


//     if(isset($_POST['name']) && isset($_POST['phone']))
//     {
        // Send email
        $name = htmlspecialchars($_POST["name"]);
        $phone = htmlspecialchars($_POST["telephone"]);
        $to = "kbogdanov1@gmail.com";
//         $from = "From: ".$name."\r\n";
        $subject = "Новая заявка на зеркало";
        $message = "Поступила новая заявка от на заказ зеркала \n\n Имя клиента: ".$name. " \n\n Телефон клиента: ".$phone;
//         mail($to, $subject, $message, $from);
        mail($to, $subject, $message);
//     }

?>
