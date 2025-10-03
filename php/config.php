<?php
$env = [
    'SMTP_HOST' => getenv('SMTP_HOST') ?: '',
    'SMTP_USER' => getenv('SMTP_USER') ?: '',
    'SMTP_PASS' => getenv('SMTP_PASS') ?: '',
    'SMTP_PORT' => getenv('SMTP_PORT') ?: '',
];

$missing = [];
foreach ($env as $key => $value) {
    if ($value === false || $value === null || $value === '') {
        $missing[] = $key;
    }
}

if (!empty($missing)) {
    throw new RuntimeException('Missing required SMTP environment variables: ' . implode(', ', $missing));
}

define('SMTP_HOST', $env['SMTP_HOST']);
define('SMTP_USER', $env['SMTP_USER']);
define('SMTP_PASS', $env['SMTP_PASS']);
define('SMTP_PORT', (int) $env['SMTP_PORT']);

$optional = [
    'SMTP_SECURE' => getenv('SMTP_SECURE') ?: '',
    'MAIL_FROM_ADDRESS' => getenv('MAIL_FROM_ADDRESS') ?: '',
    'MAIL_FROM_NAME' => getenv('MAIL_FROM_NAME') ?: '',
    'MAIL_TO_ADDRESS' => getenv('MAIL_TO_ADDRESS') ?: '',
    'MAIL_TO_NAME' => getenv('MAIL_TO_NAME') ?: '',
];

foreach ($optional as $key => $value) {
    if ($value !== '') {
        define($key, $value);
    }
}
