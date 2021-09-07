---
title: Deploying van deze NextJS-website 
excerpt: Van 'development' naar 'production' met hosting via Vercel.
image: memo_deploying.jpg
isFeatured: true
date: '2021-09-07'
---
## Twee opties

1. *Standard Build* met 'next build': heeft een NodeJS server nodig. Deze optie werd voor deze website toegepast.

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

De api onder pages/api - voor deze website: contact.js - wordt ontdaan van de login- en paswoorddata: 
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
## Test build

```js
npm run build
```

Daarop volgt een overzicht van alle pagina's, al of niet met opmerkingen. Eventueel moet de code vereenvoudigd worden of moeten packages lichter gemaakt worden. Zo is *SyntaxHighlighter* bijvoorbeeld een package om in Markdown de syntax-layout te verzorgen, die quasi alle programmeertalen - ook C++, Python, ... - ondersteunt, terwijl we hier enkel JS en CSS nodig hebben. Hiervan bestaat er ook een lichtere versie (PrismLight), waarin afzonderlijk de gebruikte programmeertalen worden gedefinieerd. Zie code in post-content.js.  

## Deployment

Na *npm rund build* worden de production-files aangemaakt in .next. Deze files dienen op de server te komen, waarbij na installatie van de packages (*npm install*), *npm start* dient gebruikt te worden. De server/provider dient node.js te ondersteunen! Die provider zal ook aangegeven welke poort er dient gebruikt te worden (i.p.v. localhost:3000 bijvoorbeeld). 

Hosting: Vercel, Netlify, ... . Hier kiezen we voor Vercel. 

### Code pushen naar een remote repository (GitHub)

Door de repository te connecteren met Vercel en in Vercel aan te geven om te redeployen als er iets wijzigt in de code, blijft de website gemakkelijk up to date met gemaakte wijzigingen. *Git* dient uiteraard geïnstalleerd te zijn. 

*In GitHub worden de settings aangepast. De settings zijn niet de settings in repository, maar worden bereikt door op de profielfoto de lijst met mogelijkheden te openen. In de linker kolom kan gekozen worden voor de 'Developer settings'. In 'Developer settings' wordt gekozen voor 'Personal access tokens'. Click op 'Generate new token'.* 

*Er wordt een 'note' gemaakt, een 'expiration date' gegeven en de volgende onderdelen worden aangekruist: repo, admin:repo_hook en delete_repo. Vervolgens: 'Generate token'. Dzee token verschijnt maar één keer (maar er kan altijd een nieuwe gevraagd worden).*

In de terminal: 

```js
git remote add origin https://@Christian-Margithub.com/Christian-Mar/Frontend.git
```

```js
git push origin main 
```

Hierop wordt het paswoord gevraagd. 

### In Vercel kan nu ingelogd worden met GitHub

Na signing up en inloggen via GitHub, wordt vanuit Vercel authorisatie gevraagd voor toegang tot de GitHub-account, met keuze tussen all of selected repositories. Nu wordt het mogelijk om de code van de repository te importeren in Vercel. 

In 'Configure Project' kunnen bepaalde eigenschappen gegeven zoals specifiek build settings en 'Environment Variables' die voor deze site werden ondergebracht in next.config.js. Voor deze website wordt niets gewijzigd en gewoon doorgegaan naar 'Deploy'.

### Deploy

Na 'deploy' worden de pagina's aangemaakt, api-routes aangemaakt, enzovoort. Het proces loopt automatisch. 

#### ... The magic happens, confetti falls down, ... :-) - de website staat op het web

Via het dashboard kunnen verschillende opties ingesteld worden. 

In MongoDB dient het opgegeven ip-adres nog veranderd te worden naar *access* van alle mogelijk ip-adressen, gezien de webiste nu op het web staat. Zo niet, verschijnt er een error in het gebruik van de contactform. Daarvoor - in MongoDB - ga naar 'Network Access', 'Add Ip Address' en vervolgens 'Allow Access From Anywhere'.

Gezien de repository *public* staat, werden de environmental variables overgebracht van next.config.js naar Vercel. 