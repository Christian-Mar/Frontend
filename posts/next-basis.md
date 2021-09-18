---
title: Next.js 
excerpt: De basis (pagina's, routing, Link, Head, Header, ...) aan de hand van het project 'dj-events'. 
image: memo_next.jpg
isFeatured: false
date: '2021-09-18'
---

### De start

```js
npx create-next-app [titel]
```

### De opbouw 

Front- en Backend worden afzonderlijk van elkaar ontwikkeld. 

Alles wat onder de public-folder staat, is automatisch zichtaar in de browser. 

Wat er in globals.css staat, is enkel van toepassing op _app.js en daarin te importeren. De styling kan gebeuren per component door de *module* te importeren of met systemen zoals *Tailwindcss*. 

Hier is *index.js* op de root de homepage. Echter, in iedere nieuwe *page* onder de pages-folder kan opnieuw een *index.js* geïnstalleerd worden. Volgens de conventie beginnen de functies in de pages telkens met een hoofdletter. 

Bij error "cannot find module 'next/babel'" vervang de bestaande code van .eslintrc.json door: 

```js
{
  "extends": ["next/babel"]
}
```

Om dynamisch pagina's te renderen - bijvoorbeeld in een blog met verschillende berichten - wordt gebruik gemaakt van een pagina-formulering met vierkante haken: [slug].js.

### Import Link & useRouter

De reden waarom next.js gebruitk word, is dat de pagina niet opnieuw zou opgeladen worden bij het clicken op een bepaalde functie, tenzij dit absoluut noodzakelijk is met gegevens van buitenaf. Daarom wordt een link niet aangeduid met een klassieke <a href='/about' ...>About</a>, maar door 'Link' te importeren.

```js
import Link from 'next/link';

function HomePage() {
	return <div>
  <h1>Home</h1>
  <Link href='/about'>About</Link>

  </div>;
}

export default HomePage;

```

Zo kunnen we ook *useRouter* importeren in de [slug].js-file:

```js
import { useRouter } from 'next/router';

function EventPage() {

  const router = useRouter();

  console.log(router);

  return (
    <div>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Click</button>
    </div>
  )
}

export default EventPage;
```

'useRouter' doet quasi hetzelfde als 'Link', maar wordt gebruikt als Link niet volstaat. Bijvoorbeeld als er nog één of ander dient te gebeuren voor het *renderen* wordt 'useRouter' gebruikt. Beide, in tegenstelling tot <a>,  zijn *client-side transistions*, waar een <a>-tag zorgt voor een nieuwe http request.  

### Head

Head zet de tekst in de tabs van de browser en wordt gemaakt als een layout die daarna gewrapped wordt rond de pagina. Hierin worden ook de meta-data meegegeven. Het gaat dus niet om de Header op de pagina.

```js
import Head from 'next/head';

function Layout({title, keywords, description, children}) {
  return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			{children}
		</div>
	);
}

Layout.defaultProps = {
  title: 'Dj Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
}

export default Layout
```

Als we Layout gewoon importeren en wrappen in de return, krijgen we de *defaultProps* op de pagina.

```js
import Layout from '../components/Layout';


function HomePage() {
	return (<Layout>
  <h1>Home</h1>
  

  </Layout>)
}

export default HomePage;
```
Overschrijven we het, dan krijgen we een nieuw *Prop*, maar blijven de *defaultProps* die niet werden overschreven. 

```js
 return (
    <Layout title='About DJ Events'>
      <h1>About</h1>
      <p>This is an app to find the latest DJ and other musical events</p>
      <p>Version: 1.0.0</p>
      <Link href='/'>Home</Link>
    </Layout>
  )
```

### Header & Footer

Header en Footer worden gemaakt als afzonderlijke componenten en dan toegevoegd aan Layout. Layout wordt dan verder gewrapped over alle pagina's, zodat op iedere pagina een header en footer te zien is.

Bij het gebruik van Link is het niet nodig om nog eens met een <a>-tag te werken, maar een <a> invoegen maakt het werk iets gemakkelijk om daarop te stylen in plaats van op Link.

```js
import Link from 'next/Link';
import styles from '../styles/Header.module.css';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
          <a>DJ Events</a>
        </Link>
			</div>

      <nav>
       <ul>
       <li>
       <Link href='/events'>
       <a>Events</a></Link>
       </li>
       </ul>
      </nav>
		</header>
	);
}

export default Header;
```

Om een component enkel op één pagina of een beperkt aantal pagina's te zetten, kan dit opgelost worden door een *if-statement* in de JSX: 

```js
{router.pathname === '/' && <Showcase />}
```

Daarvoor wordt { useRouter } from 'next/router' geïmporteerd en voor de return 'const router = useRouter();' aangemakt.


### 404-pagina

De 404-pagina wordt in de root aangemaakt en default naartoe verwezen als de url niet overeenkomt met de pagina's in de structuur. 

```js
import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';

function NotFoundPage() {
	return (
		<Layout title='Page not found'>
			<div className={styles.error}>
				<h1><FaExclamationTriangle />404</h1>
				<h4>Sorry, there's nothing here</h4>
				<Link href='/'>Go to the homepage</Link>
			</div>
		</Layout>
	);
}

export default NotFoundPage;
```

Om het te verfraaien met icons werd 'react-icons' gebruikt

```js
npm install react-icons
```
### jsconfig.json

Invoegen van een jsconfig.json-file met het volgende:

```js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths" : {
      "@/components/*": ["components/*"],
      "@/styles/*": ["styles/*"],
    },
  },
  "exclude": ["node_modules"]
}
```
zorgt ervoor dat niet steeds het volledige path moet aangegeven worden bij het importeren van de files. De '../..' of '../' of ... kunenn vervangen worden door een '@'. Maar, dit wordt niet gebruikt voor './'!

Deze file gaf in het project een voortdurende fout, waarbij de eerste '{' werd onderstreept. De fout werd weggheaald door in de settings van VS Code 'typescript validate' uit te vinken. 