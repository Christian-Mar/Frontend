import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/profileImg.png'
					alt='profielfoto'
					width={300}
					height={300}
				/>
			</div>
			<h1>Christian Marginet </h1>
			<p>2e jaar Frontend development - Syntra Gent </p>

			<article className={classes.quote}>... in mijn ervaring komt versie 1.0 pas na versie 4.17.22. ...</article>

		</section> 
	);
}

export default Hero;
