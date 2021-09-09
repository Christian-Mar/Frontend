import classes from './links.module.css';

function Links() {
	return (
		<section className={classes.links}>
			<h1>Links & referenties</h1>
			<table>
				<thead>
					<tr>
						<th colSpan='2'>Styling</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<a
								href='https://htmlcheatsheet.com/css/'
								target='_blank'
								rel='noopener noreferrer'
							>
								CSS cheatsheet
							</a>
						</td>

						<td>
							Overzicht css - interactief (daarnaast ook tabs voor JavaScript en
							HTML)
						</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
								target='_blank'
								rel='noopener noreferrer'
							>
								A Complete Guide to Flexbox
							</a>
						</td>

						<td>Overzicht gebruik Flexbox</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://coolors.co/palettes/trending'
								target='_blank'
								rel='noopener noreferrer'
							>
								Coolors
							</a>
						</td>

						<td>Kleurencombinaties voor styling</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://imagecolorpicker.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Image color picker
							</a>
						</td>

						<td>
							Applicatie bepaalt het kleur van een aangeduide plaats op een foto
						</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://undraw.co/illustrations'
								target='_blank'
								rel='noopener noreferrer'
							>
								unDraw
							</a>
						</td>

						<td>Gratis illustraties</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://www.freellustrations.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								freellustrations
							</a>
						</td>

						<td>Gratis illustraties achtergrond</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://fonts.google.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Google fonts
							</a>
						</td>

						<td>Lettertypes</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://www.fontpair.co/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Font pairs
							</a>
						</td>

						<td>Lettertypes</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://www.fontpair.co/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Font pairs
							</a>
						</td>

						<td>Lettertypes combineren</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://archetypeapp.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Archetype
							</a>
						</td>

						<td>Lettertypes combineren</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://www.designsystems.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Design systems
							</a>
						</td>

						<td>Artikels over design met interessante richtlijnen</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://feathericons.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Feather
							</a>
						</td>

						<td>Eenvoudig aanbod gratis icons</td>
					</tr>
					<tr>
						<td>
							<a
								href='https://www.iconfinder.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Icon finder
							</a>
						</td>

						<td>Ruim aanbod gratis en betaalde icons</td>
					</tr>
				</tbody>

				<thead>
					<tr>
						<th colSpan='2'>React</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<a
								href='https://reactjs.org/docs/hello-world.html'
								target='_blank'
								rel='noopener noreferrer'
							>
								React documentatie
							</a>
						</td>

						<td>React documentatie</td>
					</tr>

					<tr>
						<td>
							<a
								href='https://react-select.com/home'
								target='_blank'
								rel='noopener noreferrer'
							>
								React select
							</a>
						</td>

						<td>Package voor select-functies in forms</td>
					</tr>
				</tbody>
				<thead>
					<tr>
						<th colSpan='2'>Next.js</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<a
								href='https://nextjs.org/docs'
								target='_blank'
								rel='noopener noreferrer'
							>
								Next documentatie
							</a>
						</td>

						<td>Next documentatie (Vercel)</td>
					</tr>
				</tbody>
				<thead>
					<tr>
						<th colSpan='2'>Markdown</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<a
								href='https://www.markdownguide.org/basic-syntax/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Markdown Guide
							</a>
						</td>

						<td>Basis syntax voor .md-files</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}

export default Links;
