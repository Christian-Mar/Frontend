import { useState } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';
/*
async function sendContactData(contactDetails) {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	
	/*
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || 'Er ging iets verkeerd.');
	}
	*/


function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredName, setEnteredName] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	

  async function sendMessageHandler(event) {
		event.preventDefault();
/*
		const data = {
      enteredName,
      enteredEmail,
      enteredMessage,
    };
    console.log(data);
*/
		await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				enteredName: enteredName,
				enteredEmail: enteredEmail,
				enteredMessage: enteredMessage,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		

  };
		

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
      
		</section>
	);
}

export default ContactForm;
