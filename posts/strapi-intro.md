---
title: Strapi 
excerpt: CMS voor content en het automatisch aanmaken van een API
image: memo_backend.jpg
isFeatured: true
date: '2021-09-21'
---

### Strapi starten

```js
npx create-strapi-app dj-events-backend
```

Strapi opent op http://localhost:1337/admin/.

Backend-code openen in een nieuwe window op VS code. 

*Met de extensie Peacock en het openen van de panel via shift+cmd+P kan Peacock:change to favorite color ingegeven worden en een andere kleur voor de randen van VS Code gekozen worden. Dit maakt het wat gemakkelijker in het switchen tussen de backend- en frontend-window*

Om de strapi-server te runnen:

```js
npm run develop
```
In Strapi:

- Aanmaken van een gebruiker
- Aanmaken van een collectie via *Content-Types Builder*
- Aanmaken van velden (tekst: name, UID: slug, attached field: name, ...)
- Eens alle velden aangemaakt en opgeslagen verschijnt de collectie bij de *colletie types*. Door daar op te klikken kan een nieuw 'event' aangemaakt worden. Bij het geven van de naam wordt automatisch de slug aangepast. 
- Voorlopig wordt in de rollen binnen de settings op 'public' gezet en wordt ook 'upload' mogelijk gemaakt voor de foto's. We doen hetzelfde voor de *authenticated role*. 

### Connectie maken van de website naar Strapi

In de config-folder veranderen we in index.js de localhost naar port 1337. Daardoor zullen er tal van zaken niet meer werken, die dus ook moeten aangepast worden. 
- De index.js op de root: aanpassen van het api-path naar *${API_URL}/events?_sort=date:ASC&_limit=3*. Daarmee wordt gesorteerd (in Strapi) op datum en worden slechts 3 events getoond. 
- In de component EventItem het path naar de image aanpassen in JSX: 

```js
<Image
					src={evt.image ? evt.image.formats.thumbnail.url: '/images/event-default.png'}
					width={170}
					height={100}
				/>
```
- In next.config.js worden images toegevoegd: 

```js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com']
  }
}
```

De server dient dan opnieuw opgestart te worden.

Het fetch-path dient nog telkens aangepast te worden. 

### Gebruik van filters in search

```js
npm i qs
```

De search page:

```js
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import EventItem from '@/components/EventItem';
import qs from 'qs';
import { API_URL } from '@/config/index';
import Link from 'next/link';

function SearchPage({ events }) {
  const router = useRouter();

	return (
		<Layout title='Search Results'>
      <Link href='/events'>Go back</Link>
			<h1>Search Results for {router.query.term}</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}
		</Layout>
	);
}

export async function getServerSideProps({query: {term}}) {
  const query = qs.stringify({
		_where: {
			_or: [{ name_contains: term }, 
      { performers_contains: term },
      {description_contains: term},
      {venue_contains: term}]
		},
	});
	const res = await fetch(`${API_URL}/events?${query}`);
	const events = await res.json();

	return {
		props: { events },
	};
}
export default SearchPage;
```

### Search component in Header

```js
import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '@/styles/Search.module.css';

function Search() {
	const [term, setTerm] = useState('');
	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		router.push(`events/search?term=${term}`);
		setTerm('');
	};

	return (
		<div className={styles.search}>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={term}
					onChange={e => setTerm(e.target.value)}
					placeholder='Search Events'
				/>
			</form>
		</div>
	);
}

export default Search;
```

### Add Events

```js
import Layout from '@/components/Layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';

function AddEventPage() {
	const [values, setValues] = useState({
		name: '',
		performers: '',
		venue: '',
		address: '',
		date: '',
		time: '',
		description: '',
	});

	const router = useRouter();

	const handleSubmit = async e => {
		e.preventDefault();

		//validation

		const hasEmptyFields = Object.values(values).some(
			element => element === ''
		);

		if (hasEmptyFields) {
			alert('Please fill in all fields');
		}

		const res = await fetch(`${API_URL}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});

		if (!res.ok) {
			alert('Something went wrong!');
		} else {
			const evt = await res.json();
			router.push(`/events/${evt.slug}`);
		}
	};

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<Layout title='Add New Event'>
			<Link href='/events/'>Go Back</Link>
			<h1>Add Event</h1>
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.grid}>
					<div>
						<label htmlFor='name'>Event Name</label>
						<input
							type='text'
							id='name'
							name='name'
							value={values.name}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='performers'>Performers</label>
						<input
							type='text'
							name='performers'
							id='performers'
							value={values.performers}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='venue'>Venue</label>
						<input
							type='text'
							name='venue'
							id='venue'
							value={values.venue}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='address'>Address</label>
						<input
							type='text'
							name='address'
							id='address'
							value={values.address}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='date'>Date</label>
						<input
							type='date'
							name='date'
							id='date'
							value={values.date}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor='time'>Time</label>
						<input
							type='text'
							name='time'
							id='time'
							value={values.time}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				<div>
					<label htmlFor='description'>Event Description</label>
					<textarea
						type='text'
						name='description'
						id='description'
						value={values.description}
						onChange={handleInputChange}
					></textarea>
				</div>

				<input type='submit' value='Add Event' className='btn' />
			</form>
		</Layout>
	);
}
export default AddEventPage;
```

### Backend

Op de backend installeren we: 

```js
npm i slugify
```

In 'api/events/models/events.js': 

```js
const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.name) {
        data.slug = slugify(data.name, {lower: true} );
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.name) {
        (data.slug = slugify(data.name), { lower: true });
      }
    },
  },
};
```

