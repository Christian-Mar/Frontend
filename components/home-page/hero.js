import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/user.png'
					alt='profielfoto'
					width={300}
					height={300}
				/>
			</div>
			<h1>Christian Marginet</h1>
			<p>2e jaar Frontend developper - Syntra Gent</p>
		</section>
	);
}

export default Hero;
