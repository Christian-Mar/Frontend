---
title: MongoDB
excerpt: Opzet en gebruik van een MongoDB-database voor de contactform in deze website (React en Next.js)
image: memo_backend.jpg
isFeatured: false
date: '2021-9-02'
---

## De verschillende stappen:

1. Free account op MongoDB
2. Kies Cloud-service
3. Creëer een cluster en kies voor 'Shared'
4. Kies een Cloud Provider en regio (hier Google Cloud - Belgium)
5. MO Sandbox (gratis)

De cluster in aangemaakt!

Om te connecteren met de database vanuit de code van de applicatie, mongodb installeren via npm:

```npm
npm install mongodb
```

6. Op MongoDB - in de cluster - clicken we 'connect'. Vervolgens verschijnt een keuze-menu waarop we 'Connect your application' kiezen.
7. MongoDB vraagt nu om een IP-adres te selecteren (78.22.169.116), een username (Christian) en een paswoord (...). Daarna komt nogmaals het scherm waarop 'Connect your application' kan gekozen worden.
8. Behalve de driver (Node.js) en version, veschijnt nu een lijn code die in de applicatie kan opgenomen worden om te 'fetchen'.

Hieronder, de backend-code (pages/api/contact.js) voor deze website. Enkel de contactform is gelinkt aan mongodb :

```js
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
				'mongodb+srv://christian:PASWOORD@cluster0.1y5ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
			);
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

		client.close();

		res.status(201).json({ message: 'Ok, opgeslagen!', message: newMessage });
	}
}

export default handler;
```

De bovenstaande backend-code is verbonden met de frontend-code van de form:

```js
import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.messag || 'Er ging iets verkeerd.');
	}
}

function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredName, setEnteredName] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	const [requestStatus, setRequestStatus] = useState(); // pending, success, error
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (requestStatus === 'success' || requestStatus === 'error') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	async function sendMessageHandler(event) {
		event.preventDefault();

		// optional: add client-side validation

		setRequestStatus('pending');

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});
			setRequestStatus('success');
			setEnteredMessage('');
			setEnteredEmail('');
			setEnteredName('');
		} catch (error) {
			setRequestError(error.message);
			setRequestStatus('error');
		}
	}

	let notification;

	if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Het bericht is onderweg!',
		};
	}

	if (requestStatus === 'success') {
		notification = {
			status: 'success',
			title: 'Succes!',
			message: 'Het bericht is aangekomen!',
		};
	}

	if (requestStatus === 'error') {
		notification = {
			status: 'error',
			title:
				'Helaas, het bericht kon niet bezorgd wordern. Er is iets verkeerd gelopen',
			message: requestError,
		};
	}

	return (
		<section className={classes.contact}>
			<h1>Iets ontdekt? </h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Jouw e-mail</label>
						<input
							type='email'
							id='email'
							required
							value={enteredEmail}
							onChange={event => setEnteredEmail(event.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Jouw naam</label>
						<input
							type='text'
							id='name'
							required
							value={enteredName}
							onChange={event => setEnteredName(event.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Vertel!</label>
					<textarea
						name='message'
						id='message'
						cols='30'
						rows='10'
						required
						value={enteredMessage}
						onChange={event => setEnteredMessage(event.target.value)}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Verzenden</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
}

export default ContactForm;
```
