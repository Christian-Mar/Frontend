import mail from '@sendgrid/mail';

mail.setApiKey(process.env.MAIL_API_KEY);

 async function sendMail (req, res) {
	const body = JSON.parse(req.body);
	
	const message = `
    Name: ${body.enteredName}\r\n
    Email: ${body.enteredEmail}\r\n
    Message: ${body.enteredMessage}
  `;

	const data = {
		to: 'christianmailbox1@gmail.com',
		from: 'projectjs@outlook.be',
		subject: `New message from ${body.enteredName}`,
		text: message,
		html: message.replace(/\r\n/g, '<br />'),
	};

	await mail.send(data);

	res.status(200).json({ status: 'OK' });
};

export default sendMail;