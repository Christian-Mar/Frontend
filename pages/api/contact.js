import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.MAIL_API_KEY);

 async function sendMail (req, res) {
	const body = JSON.parse(req.body);
	
	const message = `
    name: ${body.enteredName}\r\n
    email: ${body.enteredEmail}\r\n
    message: ${body.enteredMessage}
  `;

	const data = {
		to: 'christianmailbox1@gmail.com',
		from: 'projectjs@outlook.be',
		subject: `New message from ${body.enteredName}`,
		text: message,
		html: message.replace(/\r\n/g, '<br />'),
	};

	await sendgrid.send(data);

	return res.status(200).json({ status: 'OK' });
};

export default sendMail;