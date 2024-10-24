const nodemailer = require('nodemailer');

// Function to send email alerts
const sendAlertEmail = async (condition) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'sikly.dev@gmail.com', // Replace with the recipient's email
        subject: 'EzyMetrics Alert',
        text: `Alert: ${condition}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendAlertEmail };
