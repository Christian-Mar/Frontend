---
title: Strapi 
excerpt: Backend CMS voor content
image: memo_backend.jpg
isFeatured: true
date: '2021-09-20'
---

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

In Strapi

- Aanmaken van een gebruiker
- Aanmaken van een collectie via *Content-Types Builder*
- Aanmaken van velden (tekst: name, UID: slug - attached field: name, ...)
- Eens alle velden aangemaakt en opgeslagen verschijnt de collectie bij de *colletie types*. Door daar op te klikken kan een nieuw 'event' aangemaakt worden. Bij het geven van de naam wordt automatisch de slug aangepast. 
- Voorlopig wordt in de rollen binnen de settings op 'public' gezet en wordt ook 'upload' mogelijk gemaakt voor de foto's. We doen hetzelfde voor de *authenticated role*. 

