require('dotenv').config();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465, 
    secure: true,
    auth: {
        user: process.env.user, 
        pass: process.env.pass 
    }
});

const htmlEmailContent = require('./notifemailtemp.js');



var mailOptions = {
    from: process.env.mail,
    to: 'A01705713@tec.mx',
    subject: 'Test1.0 nodemailer con zoho mail a ver si llega',
    html: htmlEmailContent  
};


transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});