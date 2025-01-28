const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Define the /send-otp route to send OTP
app.post('/send-otp', (req, res) => {
    const { phoneNumber } = req.body;

    // Make sure phoneNumber is valid
    if (!phoneNumber) {
        return res.status(400).json({ success: false, message: 'Phone number is required.' });
    }

    // Send OTP logic (e.g., using Firebase, Twilio, etc.)
    // For demonstration, we'll just return a success response
    console.log(`OTP would be sent to: ${phoneNumber}`);

    // Simulate OTP sending
    res.json({ success: true, message: 'OTP sent successfully!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
