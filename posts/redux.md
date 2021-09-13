---
title: Redux 
excerpt: Alternatief voor useContext.
image: memo_react.jpg
isFeatured: true
date: '2021-09-13'
---

### Wat is Redux?

*A state management system for cross-component or app-wide state*

Bij *local state* gaat het om één enekel component. Bvb. user-input in een form. Hiervoor wordt gebruikt gemaakt van useState() en useReducer().

Bij *cross-component state* wordt gebruik gemaakt van 'prop chains' of 'prop drilling'. Bvb. de open/closed state van een *modal overlay*. Bij *app-wide state* gaat het bijvoorbeeld over user authentidication status. Hier ook 'prop chains'/'prop drilling'.

### Wat is het verschil met useContext?

In complexe apps leidt useContext tot deep nesting in JSX en grote 'context provider' components. Dit maakt het tot een complexe setup. Anderzijds weegt het op performance als de state met hoge frequentie verandert. 

### Hoe werkt het?

Het heeft één *Central Data (State) Store*. 

De components hebben een *subscription* voor het gebruik van de State, maar veranderen de State niet rechtstreeks! De manipulatie loopt via een *Reducer Function*. Dit is niet hetzelfde als useReducer!!! 

Onrechtstreeks wordt de State veranderd door components, die *actions* dispatchen en op hun beurt doorgestuurd worden naar de Reducer Function. 