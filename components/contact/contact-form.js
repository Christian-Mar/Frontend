import classes from './contact-form.module.css';

function ContactForm() {
	return (
		<section className={classes.contact}>
			<h1>Iets ontdekt? </h1>
			<form className={classes.form}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Jouw e-mail</label>
						<input type='email' id='email' required />
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Jouw naam</label>
						<input type='text' id='name' required />
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Vertel!</label>
					<textarea name='message' id='message' cols='30' rows='10'></textarea>
				</div>
				<div className={classes.actions}>
					<button>Verzenden</button>
				</div>
			</form>
		</section>
	);
}

export default ContactForm;
