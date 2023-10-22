const qrcode = require('qrcode');
const express = require('express');

const app = express();

app.get('/v1/qr-code-generator', (req, res) => {
    const url = 'https://hannahwroblewski.netlify.com/';

    qrcode.toDataURL(url, (error, url) => {
        if (error) {
            res.status(500).json({ error: 'Failed to generate QR code'});
        } else {
            res.status(200).json({ url });
        }
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// receiving CANNOT GET error, reconfigure postman