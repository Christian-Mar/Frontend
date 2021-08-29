function handler(req, res) {
	if (res.method === 'POST') {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		);
		{
			res.status(422).json({message: 'Invalid input.'});
			return;
		}

    //store it in a database
    const newMessage = {
        email, 
        name, 
        message
    };
    console.log(newMessage);

    res.status(201).json({message: 'Ok, opgeslagen!', message: newMessage});
	}
}

export default handler;
