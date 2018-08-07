// npm Initialize
var dateFormat = require('dateformat');
var path = require('path');


// Save Agreement Form
exports.sendContactForm = function(req, res){
	console.log("Start Save Contact Form...");
	if(req.body.contactForm){
		console.log("JSON: "+JSON.stringify(req.body.contactForm, null, 4));
		res.status(200).send();
		var now = new Date();


		const nodemailer = require('nodemailer');
		// create reusable transporter object using the default SMTP transport
		let transporter = nodemailer.createTransport({
		    service: 'gmail',
		    auth: {
		        user: 'cricketownIL@gmail.com',
		        pass: 'cricket838495922Af3_3'
		    }
		});
    	// setup email data with unicode symbols
		let mailOptions = {
		    from: '"Shadow Yoga Shala" <cricketownIL@gmail.com>', // sender address
		    // to: "galsh20@gmail.com", // list of receivers
		    to: ["galsh20@gmail.com", "shuher.shani@gmail.com"], // list of receivers
		    subject: "Shadow Yoga Shala - New Message", // Subject line
		    text: "שם מלא: "+req.body.contactForm.fullName+"\n\n"+
		    		'כתובת דוא"ל: '+req.body.contactForm.email+"\n\n"+
		    		'תוכן ההודעה: \n'+req.body.contactForm.message		
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
		    if (error) {
		        return console.log(error);
		    }
		    console.log('Message %s sent: %s', info.messageId, info.response);
		});

	}
	else return res.status(500).send();
};


// Auto Server Check (Admin Mode)
exports.serverCheck = function(req, res){
	console.log("Server Checked..");
	return res.status(200).send();
};
