<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

$allowedOrigins = [
    'https://mogclean.com.au',
    'https://mogcleaning.com.au',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$isLocalhost = preg_match('#^https?://(localhost|127\.0\.0\.1)(:\d+)?$#', $origin) === 1;

if (in_array($origin, $allowedOrigins, true) || $isLocalhost) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (is_readable($autoloadPath)) {
    require $autoloadPath;
} else {
    require __DIR__ . '/phpmailer/src/PHPMailer.php';
    require __DIR__ . '/phpmailer/src/SMTP.php';
    require __DIR__ . '/phpmailer/src/Exception.php';
}

$configLoaded = false;
$primaryConfigPath = '/home/iupaxipp/config.php';
if (is_readable($primaryConfigPath)) {
    require $primaryConfigPath;
    $configLoaded = true;
}

if (!$configLoaded) {
    $localConfigPath = __DIR__ . '/config.php';
    if (is_readable($localConfigPath)) {
        require $localConfigPath;
        $configLoaded = true;
    }
}

if (!$configLoaded) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail configuration missing.']);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$rawName = filter_input(INPUT_POST, 'name', FILTER_UNSAFE_RAW, FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH) ?? '';
$name = trim(strip_tags($rawName));
$emailValue = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = trim(filter_input(INPUT_POST, 'message', FILTER_UNSAFE_RAW) ?? '');
$phone = trim(filter_input(INPUT_POST, 'phone', FILTER_UNSAFE_RAW) ?? '');

if ($emailValue === false || $emailValue === null) {
    echo json_encode(['success' => false, 'message' => 'A valid email address is required']);
    exit;
}

$email = trim($emailValue);

if ($name === '' || $message === '') {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = SMTP_PORT;

    $mail->setFrom(SMTP_USER, 'MOG Cleaning Website');
    $mail->addAddress('quotes@mogcleaning.com.au', 'MOG Cleaning');
    $mail->addReplyTo($email, $name);

    $bodyLines = [
        "Name: {$name}",
        "Email: {$email}",
    ];

    if ($phone !== '') {
        $bodyLines[] = "Phone: {$phone}";
    }

    $bodyLines[] = 'Message:';
    $bodyLines[] = $message;

    $mail->isHTML(false);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body = implode("\n", $bodyLines);

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} catch (PHPMailer\PHPMailer\Exception $e) {
    $logDirectory = '/home/iupaxipp/mail_logs';
    if (!is_dir($logDirectory)) {
        mkdir($logDirectory, 0700, true);
    }

    $logFile = $logDirectory . '/mail_errors.log';
    $logEntry = '[' . date('Y-m-d H:i:s') . '] ' .
        "From: {$name} <{$email}>" . PHP_EOL .
        'Phone: ' . ($phone !== '' ? $phone : 'N/A') . PHP_EOL .
        'Message: ' . $message . PHP_EOL .
        'Error: ' . $e->getMessage() . PHP_EOL .
        str_repeat('-', 50) . PHP_EOL;

    file_put_contents($logFile, $logEntry, FILE_APPEND);

    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $e->getMessage()]);
}
