// backend/firebase-config.js
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK with the service account private key
const serviceAccount = require("./firebase-key.json"); // Path to the downloaded service account key

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount), // Use the credentials to authenticate
});

// Get the authentication instance
const auth = admin.auth();

// Export the Firebase authentication module for use in other parts of the app
module.exports = auth;
