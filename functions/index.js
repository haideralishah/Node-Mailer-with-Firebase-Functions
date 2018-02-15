const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });


// exports.anotherHelloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });


exports.sendEmail = functions.https.onRequest((request, response) => {
    console.log(request,'**************');
    
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'samanamage@gmail.com', // Your email id
            pass: '' // Your password
        }
    });
    var text = 'Test Email by coinofpakistan@gmail.com';
    var mailOptions = {
        from: 'samanamage@gmail.com', // sender address
        to: 'headeralishah@gmail.com', // list of receivers
        subject: 'Test', // Subject line
        text: text, //, // plaintext body     
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            response.json({ notSent: error });
        } else {
            console.log('Message sent: ' + info.response);
            response.json({ sent: info.response });
        };
    });
    // response.send("Hello from Firebase!");

});
