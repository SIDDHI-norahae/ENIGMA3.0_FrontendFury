<?php

// Set up AES encryption with a cipher key
$cipher = "aes-256-cbc"; // AES cipher
$key = "1234567890abcdef1234567890abcdef"; // 32-byte key for AES-256
$iv = "1234567890abcdef"; // Initialization vector (16 bytes)

// Function to encrypt data
function encrypt($data) {
    global $key, $iv, $cipher;
    return openssl_encrypt($data, $cipher, $key, 0, $iv);
}

// Function to decrypt data
function decrypt($data) {
    global $key, $iv, $cipher;
    return openssl_decrypt($data, $cipher, $key, 0, $iv);
}

// Check if data is posted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $userId = $_POST['userId'];
    $voterId = $_POST['voterId'];

    // Encrypt the data
    $encryptedUserId = encrypt($userId);
    $encryptedVoterId = encrypt($voterId);

    // Return the encrypted data as JSON
    echo json_encode([
        'encryptedUserId' => $encryptedUserId,
        'encryptedVoterId' => $encryptedVoterId
    ]);
}
?>
