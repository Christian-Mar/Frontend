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


