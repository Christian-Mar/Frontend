---
title: MongoDB
excerpt: Opzet en gebruik van een MongoDB-database
image: memo_backend.jpg
isFeatured: true
date: '2021-9-01'
---

1. Free account op MongoDB 
2. Kies Cloud-service
3. Creëen een cluster en kies voor 'Shared'
4. Kies een Cloud Provider en regio (hier Google Cloud - Belgium)
5. MO Sandbox (gratis)

De cluster in aangemaakt!

In het programma (terminal), om te contecteren met de database:

```npm
npm install mongodb
```

We gebruiken dit in server-side code, in de api-routes. We gebruiken dit niet in de client-side code omdat het daar niet voor geschikt is, maar ook omdat de credentials (paswoord, etc) in de code worden opgenomen. 

6. Op MongoDB - in de cluster - clicken we connect. Vervolgens verschijnt een keuze-menu waarop we 'Connect your application' kiezen.   
7. MongoDB vraagt nu om een IP-adres te selecteren (78.22.169.116), een username (Christian) en een paswoord. Daarna komt nogmaals het scherm waarop 'Connect your application' kan gekozen worden.
8. Behalve de driver en version, veschijnt nu een lijn code die in de applicatie kan opgenomen worden.  

