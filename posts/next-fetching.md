---
title: Next.js data-fetching
excerpt: Data-fetching, api-routes, ... 
image: memo_next.jpg
isFeatured: false
date: '2021-09-20'
---
### API-routes

Hier wordt een file *data.json* voorzien, die een array van data vormt en waarop gefetcht wordt. Op de meest simpele manier volstaat de volgende code: 

```js
const { events } = require('./data.json')

export default function handler(req, res) {
    res.status(200).json(events)
  } 
```

Als we de route (https://localhost:3000/api/events) invoegen in Postman krijgen de volledige array aan data, ongeacht ofwe een POST of GET of ... request gebruiken. Daarom breiden we de code uit om nu te limiteren tot GET: 

```js
const { events } = require('./data.json')

export default function handler(req, res) {
  if(req.method === 'GET') {
    res.status(200).json(events)
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${res.method} is not allowed`});
  }
  
}
```

Als we deze code in Postman voegen met een een POST-request krijgen we de boodschap: "method POST us not allowed".

Willen we nu per specifiek event de data opvragen, dan filteren we op de slug van data.json. 

```js
const { events } = require('./data.json');

export default function handler(req, res) {
  const evt = events.filter(ev => ev.slug === slug)
	if (req.method === 'GET') {
		res.status(200).json(evt);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${res.method} is not allowed` });
	}
}
```

- 'next export' kan niet gebuikt worden binnen de website voor api-routes. 

### getServerSideProps & getStaticProps

Er zijn drie unieke functies om te fetchen binnen Next.js:

- getStaticProps (Static Generation): Fetch data at build time. Dus, 1 keer. Maar, dit kan omzeild worden door in de return 'revalidate' te gebruiken die telkens om de zoveel ingestelde tijd de request herhaalt. 
- getStaticPaths (Static Generation): Specify dynamic routes to pre-render pages based on data.
- getServerSideProps (Server-side Rendering): Fetch data on each request. Loopt telkens als we op de pagina komen waar de fetch gebeurt. 

Om de events op te roepen op de homepage passen we de pagina als volgt aan: 

```js
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';

function HomePage({events}) {
	return (<Layout>
  <h1>Upcoming Events</h1>
  

  </Layout>)
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json();

  return {
    props: {events},
    revalidate: 1,
  }
};
export default HomePage;
```

Hiervoor is er ook een config aangemaakt, met daarnaast een aanpassing van de jsconfig.json-file. Dit, om niet telken het heel path te moeten vermelden van de te fetchen data. 

index.js in /config:
```js
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
```

jsconfig.json

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths" : {
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
       "@/config/*": ["config/*"],
    },
  },
  "exclude": ["node_modules"]
}
```

### De events tonen

Op de homepage: 

```js
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';

function HomePage({events}) {
	return (<Layout>
  <h1>Upcoming Events</h1>
  {events.length === 0 && <h3>No events to show</h3>}
  {events.map((evt) => (<h3 key={evt.id}>{evt.name}</h3>))}
  </Layout>)
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json();

  return {
    props: {events},
    revalidate: 1,
  }
};
export default HomePage;
```

Dit geeft de namen van de events weer als een h3. Dit vervangen we door een component EventItem die veel meer data weergeeft. 

In de index.js-file wordt dit:

```js
{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
```

De component zelf: 

```js
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/EventItem.module.css';

function EventItem({ evt }) {
	return (
		<div className={styles.event}>
			
    <div className={styles.img}>
				<Image
					src={evt.image ? evt.image : '/images/event-default.png'}
					width={170}
					height={100}
				/>
			</div>
			
      <div className={styles.info}>
				<span>
					{evt.date} at {evt.time}
				</span>
				<h3>{evt.name}</h3>
			</div>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>  
      </div>
		</div>
	);
}

export default EventItem;
```

We breiden index.js nog iets verder uit:

- Als er geen events zijn is er de boodschap dat er geen events zijn
- Als er events zijn, worden deze gemapt
- Als er events zijn, wordt er ook een link gelegd via een button naar de events-pagina

```js
function HomePage({events}) {
	return (
		<Layout>
			<h1>Upcoming Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
			{events.length > 0 && (
				<Link href='/events'>
					<a className='btn-secondary'>View All Events</a>
				</Link>
			)}
		</Layout>
	);
}
```

### getStaticPaths

De weg naar de adzonderlijke events kan bereikt worden via *getServerSideProps* of via de combinatie van *getStaticPaths* en *getStaticProps*. Deze laatste manier is om de website statisch te maken, waarbij het request gebeurt op het ogenblik van *buildtime*. Een statisch website is een website die geen backend nodig heeft en de simpelste vorm van website. 

De code voor beide mogelijkheden; 

```js
import Layout from '@/components/Layout';
import {API_URL} from '@/config/index';

function EventPage({evt}) {

  
  return (
    <Layout>
      <h1>{evt.name}</h1>
      
    </Layout>
  )
}


export async function getStaticPaths() {

  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map(evt => ({
    params: {slug: evt.slug}
  }))

  return {
		paths,
    fallback: true, 
  }
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(`${API_URL}/api/events/${slug}`);
	const events = await res.json();

	return {
		props: {
			evt: events[0],
		},
    revalidate: 1
	};
}

export default EventPage;

/*
export async function getServerSideProps({query: {slug}}) {

  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    }
  }
}

export default EventPage;
*/
```

### Single Event Page

pages/events/[slug].js

```js
import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

function EventPage({ evt }) {
	const deleteEvent = e => {
		console.log('delete');
	};

	return (
		<Layout>
			<div className={styles.event}>
				<div className={styles.controls}>
					<Link href={`/events/edit/${evt.id}`}>
						<a>
							<FaPencilAlt /> Edit Event
						</a>
					</Link>
					<a href='#' className={styles.delete} onClick={deleteEvent}>
						<FaTimes /> delete Event
					</a>
				</div>
				<span>
					{evt.date} at {evt.time}
				</span>
				<h1>{evt.name}</h1>
				{evt.image && (
					<div className={styles.image}>
						<Image src={evt.image} width={960} height={600} />
						<h3>Performers:</h3>
						<p>{evt.perfomers}</p>
						<h3>Description:</h3>
						<p>{evt.description}</p>
						<h3>Venue: {evt.venue}</h3>
						<p>{evt.address}</p>
						<Link href='/events'>
							<a className={styles.back}>{'<'} Go Back</a>
						</Link>
					</div>
				)}
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/api/events?slug=${slug}`);
	const events = await res.json();

	return {
		props: {
			evt: events[0],
		},
	};
}

export default EventPage;

```