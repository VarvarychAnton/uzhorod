<?php
 
/* Задаем переменные */
$name = htmlspecialchars($_POST["name"]);
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
//$website = htmlspecialchars($_POST["website"]);
//$message = htmlspecialchars($_POST["message"]);
//$bezspama = htmlspecialchars($_POST["bezspama"]);
 
/* Ваш адрес и тема сообщения */
$address = "maetokbozdosh@gmail.com";
$address1 = "boyko.bozdosh@gmail.com";
$sub = "Заказ обратного звонка с сайта Bozdosh.com.ua";
 
/* Формат письма */
$mes = "Сообщение с сайта Bozdosh.com.ua.\n
Имя отправителя: $name 
Электронный адрес отправителя: $email
Телефон отправителя: $tel

Свяжитесь со мной пожалуйста!
";
 
 
if (empty($bezspama)) /* Оценка поля bezspama - должно быть пустым*/
{
/* Отправляем сообщение, используя mail() функцию */
$from  = "From: $name <$email> \r\n Reply-To: $email \r\n";
if (mail($address, $sub, $mes, $from)) {
 header('Refresh: 3; URL=http://bozdosh.com.ua');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h1>Ваш запрос успешно отправлен <br><br><br>Мы свяжемся с Вами в ближайшее рабочее время</h1> 

    <style>body {background: url(../img/contacts.jpg); background-size: cover; text-align: center;} h1 {display: inline-block; background-color: rgba(24,153,235,0.7); color: #fff; text-align:center; padding: 30px; margin: 15% auto; float: none;} </style>
    </body>

    ';}
else {
 header('Refresh: 5; URL=http://biznessystem.ru');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 5 секунд вы вернетесь на главную страницу</body>';}
}
if (mail($address1, $sub, $mes, $from)) {
 header('Refresh: 3; URL=http://bozdosh.com.ua');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h1>Ваш запрос успешно отправлен <br><br><br>Мы свяжемся с Вами в ближайшее рабочее время</h1> 

    <style>body {background: url(../img/contacts.jpg); background-size: cover; text-align: center;} h1 {display: inline-block; background-color: rgba(24,153,235,0.7); color: #fff; text-align:center; padding: 30px; margin: 15% auto; float: none;} </style>
    </body>

    ';}
else {
 header('Refresh: 5; URL=http://biznessystem.ru');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 5 секунд вы вернетесь на главную страницу</body>';}
}
exit; /* Выход без сообщения, если поле bezspama заполнено спам ботами */
?>