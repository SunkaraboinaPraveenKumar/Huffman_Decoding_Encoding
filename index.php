<?php
// Simple PHP script to serve static files

// Serve static files from the current directory
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$ext = pathinfo($path, PATHINFO_EXTENSION);

// Only serve .html, .js, .css files
if ($ext === 'html' || $ext === 'js' || $ext === 'css') {
    // Serve the requested file
    if (file_exists(__DIR__ . $path)) {
        return false; // Serve the requested file as-is
    } else {
        http_response_code(404);
        echo "404 Not Found";
    }
} else {
    http_response_code(403);
    echo "Forbidden";
}
