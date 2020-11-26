/**
 * @file For sending mail to client using nodemailer.
 * @author Krutin Trivedi
 */

//importing Components & required Modules
var nodemailer = require('nodemailer');

var sendMailMethods = {
	forgotPassword: function(email, _token_) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hawkdeveloper5709@gmail.com',
                pass: 'Admin@123'
            }
        });
        
        var mailOptions = {
            from: 'hawkdeveloper5709@gmail.com',
            to: email,
            subject: 'Hawk-Security',
            html: '<h1>Did you forgot your password</h1>' +
                        '<p>we got your backs..</p>' +
                        '<br/>' +
                        '<p>To change your password click on the below link</p>' +
                        '<br/>' +
                        '<a href="http://localhost:3000/reset_password?reset='+ _token_ +'">http://localhost:3000/reset_password?reset='+_token_+'</a>'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
	},
	userRequest: function(firstName, lastName, email) {
		var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hawkdeveloper5709@gmail.com',
                pass: 'Admin@123'
            }
        });
        
        var mailOptions = {
            from: 'hawkdeveloper5709@gmail.com',
            to: email,
            subject: 'Hawk-Security',
            html: '<h1>Hello there ' + firstName + " " + lastName + '..!</h1>' +
                        '<p>How are you doing..?</p>' +
                        '<br/>' +
                        '<p>our team will get back to you shortly. please write any query you have in this mail thread.</p>' +
                        '<br/>' +
                        '<p>until then, Have good day ' + firstName + " " + lastName + '..! will see you soon</p>'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
	}
};

module.exports = sendMailMethods;