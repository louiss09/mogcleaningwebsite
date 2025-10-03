<?php
header('Content-Type: application/json; charset=UTF-8');

 = [
    'https://mogclean.com.au',
    'https://mogcleaning.com.au',
];

 = ['HTTP_ORIGIN'] ?? '';
 = preg_match('#^https?://(localhost|127\.0\.0\.1)(:\d+)?$#', ) === 1;

if (in_array(, , true) || ) {
    header('Access-Control-Allow-Origin: ' . );
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if (['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

 = __DIR__ . '/vendor/autoload.php';
if (is_readable()) {
    require ;
} else {
    require __DIR__ . '/phpmailer/src/PHPMailer.php';
    require __DIR__ . '/phpmailer/src/SMTP.php';
    require __DIR__ . '/phpmailer/src/Exception.php';
}

 = false;
 = '/home/iupaxipp/config.php';
if (is_readable()) {
    require ;
     = true;
}

if (!) {
     = __DIR__ . '/config.php';
    if (is_readable()) {
        require ;
         = true;
    }
}

if (!) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail configuration missing.']);
    exit;
}

if (['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

 = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING) ?? '';
 = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL) ?? '';
 = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING) ?? '';
 = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING) ?? '';

if ( === '' ||  === '' ||  === '') {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

 = new PHPMailer(true);

try {
    ->isSMTP();
    ->Host = SMTP_HOST;
    ->SMTPAuth = true;
    ->Username = SMTP_USER;
    ->Password = SMTP_PASS;
    ->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    ->Port = SMTP_PORT;

    ->setFrom(SMTP_USER, 'MOG Clean Website');
    ->addAddress('quotes@mogcleaning.com.au', 'MOG Cleaning');
    ->addReplyTo(, );

    ->isHTML(false);
    ->Subject = 'New Contact Form Submission';

     = [
        "Name: {}",
        "Email: {}",
    ];

    if ( !== '') {
        [] = "Phone: {}";
    }

    [] = 'Message:';
    [] = ;

    ->Body = implode("\n", );

    ->send();

    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} catch (Exception ) {
     = '/home/iupaxipp/mail_logs';
    if (!is_dir()) {
        mkdir(, 0700, true);
    }

     =  . '/mail_errors.log';
     = '[' . date('Y-m-d H:i:s') . '] ' .
        "From: {} <{}>" . PHP_EOL .
        'Phone: ' . ( !== '' ?  : 'N/A') . PHP_EOL .
        'Message: ' .  . PHP_EOL .
        'Error: ' . ->ErrorInfo . PHP_EOL .
        str_repeat('-', 50) . PHP_EOL;

    file_put_contents(, , FILE_APPEND);

    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . ->ErrorInfo]);
}
