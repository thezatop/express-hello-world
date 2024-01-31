const express = require('express');
const app = express();

const PORT = 3001;

app.use((req, res, next) => {
    const userIP = req.ip || req.connection.remoteAddress;
    console.log(`User connected from IP: ${userIP}`);
    next();
});

app.get('/', (req, res) => {
    const userIP = req.ip || req.connection.remoteAddress;
    const pageTitle = 'Wayne CountyTea'; // Set your desired title here
    const htmlResponse = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${pageTitle}</title>
        </head>
        <body>
            <p>Thanks for connecting guest ${userIP}.. Loading content..</p>
        </body>
        </html>
    `;
    res.send(htmlResponse);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
