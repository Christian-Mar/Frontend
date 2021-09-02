import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		//check of het request is POST
		const { email, name, message } = req.body;
		// validation (check of het wel een juiste e-mail, naam, message is)
		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Onjuiste input.' });
			return;
		}
		// opslaan in een database
		const newMessage = {
			email,
			name,
			message,
		};
		console.log(newMessage);

		// Connectie maken met de database

		let client;

		try {
		   client = await MongoClient.connect(
				'mongodb+srv://christian:newCBR650@cluster0.1y5ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
			)
		} catch (error) {
			res.status(500).json({ message: 'Geen connectie met de database.' });
			return;
		}

		const db = client.db();

		// interactie met de database

		try {
			const result = await db.collection('messages').insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: 'Opslaan is niet gelukt.' });
			return;
		}

		// sluiten van de connectie

		//client.close();

		res.status(201).json({ message: 'Ok, opgeslagen!', message: newMessage });
    
	}
}


export default handler;

