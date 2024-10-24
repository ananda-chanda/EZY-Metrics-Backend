const nodemailer = require('nodemailer');

// Function to send email alerts
const sendAlertEmail = (condition) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'sikly.dev@gmail.com',  // Replace with the recipient's email
        subject: 'EzyMetrics Alert',
        text: `Alert: ${condition}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = { sendAlertEmail };
