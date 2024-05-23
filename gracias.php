<?php
//$your_email ='pdmarketing@proyecciones.net';// <<=== update to your email address
$your_email ='pdmarketing@proyecciones.net';

foreach (['nombre','telefono','email','mensaje'] as $f) {
  if (!isset($_POST[$f]) || !$_POST[$f]) {
    header('Location: index.html');
    exit;
  }
}
foreach ($_POST as $k => $v) {
  $_POST[$k] = htmlentities(trim($v), ENT_QUOTES);
}
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = '6LfIt30UAAAAAA2HRVTJ4aWwDfWbmTe2--eHG1r7';
$recaptcha_response = $_POST['g-recaptcha-response'];
$query = http_build_query(['secret'=> $recaptcha_secret, 'response' => $recaptcha_response]);
$response = json_decode(file_get_contents($recaptcha_url . '?' . $query));
if (!$response || !$response->success) {
  header('Location: index.html#frmContacto');
  exit;
}

$name = $_POST['nombre'];
$phone = $_POST['telefono'];
$empresa = $_POST['empresa'];
$visitor_email = $_POST['email'];
$user_message = $_POST['mensaje'];

//send the email
$to = $your_email;
$subject="Formulario de Landing Eventos Virtuales";
$from = $visitor_email;
$ip = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '';

$body = "El usuario $name a enviado el formulario de contacto desde la landing:\n\n".
"Nombre: $name\n".
"Email: $visitor_email \n".
"Telefono: $phone\n".
"Empresa: $empresa\n".
"Mensaje: \n ".
"$user_message\n\n\n".
"IP: $ip\n";

require_once __DIR__.'/PHPMailer/PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->SMTPAuth   = true;
$mail->SMTPSecure = "ssl";
$mail->Host       = "smtp.gmail.com";
$mail->Port       = 465;
$mail->Username   = "pdigitalesmarketing2@gmail.com";
$mail->Password   = "Dani2020";
$mail->SMTPSecure   = true;
$mail->addReplyTo($visitor_email);
$mail->setFrom($mail->Username);
$mail->addAddress($your_email);
$mail->addCC('pdmarketing@proyecciones.net');
$mail->addBCC('pruebas@imactions.com');
$mail->isHTML(false);
$mail->Subject      = $subject;
$mail->CharSet      = 'UTF-8';
$mail->Body         = $body;
$sent = $mail->send();
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <title>PROYECCIONES CE - ARQUITECTURA TECNOLOGICA</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- //// FAVICON  //// -->
<link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="images/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
<link rel="manifest" href="images/favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-55469603-1"></script> <script>window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-55469603-1');</script>

<!-- //// FAVICON  //// -->

    <!-- PARA LOS LISTADOS EN LOS DATATABLES-->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- PARA LOS ICONOS DE LOS BOTONES-->
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/estilos.css">
    <link rel="stylesheet" href="css/fonts.css">
    <!-- PARA LOS ICONOS QUE ROTAN - CORROUSEL HORIZONTAL-->
    <link href="css/slide1.css" rel="stylesheet">
    <!-- PARA LOS ICONOS QUE ROTAN - CORROUSEL HORIZONTAL-->

    <!-- PARA LOS ICONOS DE LOS TITULOS (WASAP, TEL y MAIL-->
    <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">

    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900&display=swap" rel="stylesheet">

    <!-- FONTS
      font-family: 'Lato', sans-serif;
    -->

    <script src="https://www.google.com/recaptcha/api.js?hl=es" async defer></script>

    <link href="https://chat.godixital.com/chat/css/chat.css" rel="stylesheet" >
    <script type="text/javascript" src="https://chat.godixital.com/chat/js/index.php"></script>
    <!-- Boton whatsapp -->
    <script type="text/javascript" src="https://leads.godixital.com/js/whatsapp_button/whatsapp_button.php"></script> 

</head>
<body>
<section class="first">
    <!-- ARRIBA - NAVBAR  -->
    <div class="container-fluid">
      <nav class="navbar navbar-static-top navbar-custom" role="navigation">
        <div class="upper-nav">
          <a href="https://proyecciones.net/eventos-virtuales/"><img class="logo" src="images/logo.png"></a>
          <div id="divphones" class="pull-right dp">
            <div id="phones">
              <p>
                <i class="fa fa-lg fa-envelope"></i>
                <a class="mail_arriba" href="mailto:pdmarketing@proyecciones.net">pdmarketing@proyecciones.net</a>
                <img src="images/telefono.png">
                <span><a class="tel_arriba" href="tel:1153531110">11 5353 1110</a></span></p>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- ARRIBA - NAVBAR  -->

  <div class="container">
    <div class="row">
      <div class="col-md-12 tituloH text-center" id="respuesta">
        <p>Estimado Cliente,
           <br>sus datos se han enviado correctamente,<br>
            nuestros representantes se contactarán a la brevedad.
            <br><br>¡Gracias por elegirnos!<br><br>
        </p>
      </div>
    </div>
  </div>
</section>

</body>
</html>

    <!-- PARA LOS LISTADOS EN LOS DATATABLES-->
    <script src="js/jquery-1.12.4.js"></script>
    <!-- PARA EL MENU-->
    <script src="js/bootstrap.min.js"></script>