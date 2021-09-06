---
title: Deploying van deze NextJS-website 
excerpt: Van 'development' naar 'production'
image: memo_deploying.jpg
isFeatured: true
date: '2021-09-06'
---
## Twee opties

1. *Standard Build* met 'next build': heeft een NodeJS server nodig.

2. *Full Static Build* met 'next export': geen NodeJS nodig. Kan enkel gebruikt worden voor een 100% statische app, dus niet wanneer er API-routes gebruikt worden, server-side pagina's gebruikt worden of 'revalidation' gebruikt wordt om af en toe de website te updaten. Bij wijziging van de code of content is er telkens een redeployment nodig. 

In package.json "scripts" aanvullen met:
```js
"export": "next export",
```

## Checks

- Metadata op alle pagina's
- Optimale code
- Alle onnodige dependencies verwijderd
- ... 

*Environment variables* gebruiken voor variabele data (zoals database credentials, API keys, ...)

## Api

De api onder pages/api - voor deze website contact.js - wordt ontdaan van de login- en paswoorddata: 
```js
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.1y5ew.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
		
		try {
		   client = await MongoClient.connect(connectionString);
		} catch (error) {
			res.status(500).json({ message: 'Geen connectie met de database.' });
			return;
		}
```
Terwijl deze login-data opgenomen worden in next.config.js:

```js
module.exports = {
	env: {
		mongodb_username: 'christian',
		mongodb_password: 'XXXXXXXXX',
		mongodb_clustername: 'cluster0',
		mongodb_database: 'myFirstDatabase',
	},
};
```

Om na te gaan of het werkt opnieuw opstarten met *npm run dev'*.

In next.config.js kunnen de fetch-data nog aangepast worden naargelang de fase, zoals development, build, export, ... . Zo kan er getest worden op een andere database in de development-fase dan wanneer de applicatie *up & running* is. Kan belangrijk zijn om te gaan testen zonder risico op data te overschrijven in een bestaande database. 

```js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'christian',
				mongodb_password: 'XXXXXXXXXXX',
				mongodb_clustername: 'cluster0',
				mongodb_database: 'myFirstDatabase',
			},
		};
	}

  return {
		env: {
			mongodb_username: 'christian',
			mongodb_password: 'YYYYYYYYYYYYYY',
			mongodb_clustername: 'cluster0',
			mongodb_database: 'mainDatabase',
		},
	};

};
```
