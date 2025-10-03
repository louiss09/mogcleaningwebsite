<?php
$env = [
    'SMTP_HOST' => getenv('SMTP_HOST'),
    'SMTP_USER' => getenv('SMTP_USER'),
    'SMTP_PASS' => getenv('SMTP_PASS'),
    'SMTP_PORT' => getenv('SMTP_PORT'),
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
