<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=UTF-8');

$allowedOrigins = [
    'https://mogclean.com.au',
    'https://mogcleaning.com.au',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$isLocalhost = $origin !== '' && preg_match('#^https?://(localhost|127\\.0\\.0\\.1)(:\\d+)?$#', $origin) === 1;

if ($origin !== '' && (in_array($origin, $allowedOrigins, true) || $isLocalhost)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$composerAutoload = __DIR__ . '/vendor/autoload.php';
if (is_readable($composerAutoload)) {
    require $composerAutoload;
} else {
    require __DIR__ . '/phpmailer/src/PHPMailer.php';
    require __DIR__ . '/phpmailer/src/SMTP.php';
    require __DIR__ . '/phpmailer/src/Exception.php';
}

$configLoaded = false;
$sharedConfig = '/home/iupaxipp/config.php';
if (is_readable($sharedConfig)) {
    require $sharedConfig;
    $configLoaded = true;
}

if (!$configLoaded) {
    $localConfig = __DIR__ . '/config.php';
    if (is_readable($localConfig)) {
        require $localConfig;
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

$name = trim((string) (filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS) ?? ''));
$emailRaw = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$email = trim((string) ($emailRaw ?? ''));
$message = trim((string) (filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS) ?? ''));
$phone = trim((string) (filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS) ?? ''));

if ($name === '' || $email === '' || $message === '') {
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$fromAddress = getenv('MAIL_FROM_ADDRESS') ?: SMTP_USER;
$fromName = getenv('MAIL_FROM_NAME') ?: 'MOG Clean Website';
$recipientAddress = getenv('MAIL_TO_ADDRESS') ?: 'quotes@mogcleaning.com.au';
$recipientName = getenv('MAIL_TO_NAME') ?: 'MOG Cleaning';

$mail = new PHPMailer(true);

try {
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = SMTP_PORT;

    $mail->setFrom($fromAddress, $fromName);
    $mail->addAddress($recipientAddress, $recipientName);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = 'New Contact Form Submission';

    $lines = [
        "Name: {$name}",
        "Email: {$email}",
    ];

    if ($phone !== '') {
        $lines[] = "Phone: {$phone}";
    }

    $lines[] = 'Message:';
    $lines[] = $message;

    $mail->Body = implode("\n", $lines);

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} catch (Exception $exception) {
    $logDir = '/home/iupaxipp/mail_logs';
    if (!is_dir($logDir)) {
        mkdir($logDir, 0700, true);
    }

    $logFile = $logDir . '/mail_errors.log';
    $logMessage = '[' . date('Y-m-d H:i:s') . '] '
        . "From: {$name} <{$email}>" . PHP_EOL
        . 'Phone: ' . ($phone !== '' ? $phone : 'N/A') . PHP_EOL
        . 'Message: ' . $message . PHP_EOL
        . 'Error: ' . $mail->ErrorInfo . PHP_EOL
        . str_repeat('-', 50) . PHP_EOL;

    file_put_contents($logFile, $logMessage, FILE_APPEND);

    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
