const { MAILGUN_API_KEY: apiKey, MAILGUN_SANDBOX_DOMAIN: domain, RECEIVER_EMAILS: receiver_emails } = process.env
const mailgun = require('mailgun-js')({ apiKey, domain })

exports.handler = function(event, context, callback) {

    // if(event.httpMethod!='POST' || !event.body){
    //     return callback(new Error('An error occurred!'))
    // }

    const data = JSON.parse(event.body)

    const receivers = receiver_emails.split(',');

    // if(data.antibot.length>0){
    //     return callback(new Error('Forbidden access'))
    // }

    let messageData = {
        from: data.senderEmail,
        to: receivers.join(','),
        subject: `MESSAGE FROM WEBSITE: ${data.subject}`,
        text: ` REASON: ${data.reasonForContacting} \n SUBJECT: ${data.subject} \n SINGUP: ${data.singupForEmaillist} \n ADDITIONAL INFO: ${data.additionalInfo} \n NAME: ${data.senderName} \n MESSAGE: ${data.senderMessage}`
    }

    // Adding recipient variables as required by Mailgun for batch sending
    // Here we're just passing empty objects since the message is identical for all recipients
    messageData.recipient_variables = receivers.reduce((acc, email) => {
        acc[email] = {};
        return acc;
    }, {});


    mailgun.messages().send(messageData, function (error) {
        if (error) {
    		return callback(error);
    	} else {
    		return callback(null, {
			    statusCode: 200,
			    body: 'success'
	    	});
    	}
    })

}