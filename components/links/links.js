import classes from './links.module.css';

function Links() {
	return (
		<section className={classes.links}>
			<h1>Links & referenties</h1>
			<p>
				<a
					href='https://htmlcheatsheet.com/css/'
					target='_blank'
					rel='noopener noreferrer'
				>
					CSS CheatSheet
				</a>
				: interactief overzicht CSS met simulatiemogelijkheden
			</p>
			<p>
				<a
					href='https://www.markdownguide.org/cheat-sheet/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Markdown CheatSheet
				</a>
				: basis syntax voor het schrijven in .md-files
			</p>
			<p>
				<a
					href='https://react-select.com/home'
					target='_blank'
					rel='noopener noreferrer'
				>
					React Select
				</a>
				: package - documentatie select-mogelijkheden voor formulier in React
			</p>
		</section>
	);
}

export default Links;
