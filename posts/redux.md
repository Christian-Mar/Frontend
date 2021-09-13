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

### Starten 

```js
npm install redux
```

Het importeren gebeurt via node.js. Daarna volgt een reducer-functie (geeft de initële state aan), een store (die met getState kan opgeroepen worden), een subscriber-functie (die de volgende state aangeeft) en tenslotte de dispatch-functie (die er voor zorgt dat een actie uitgevoerd wordt, anders gebeurt er nog niets):

```js
const redux = require('redux');

const counterReducer = (state = { counter: 0}, action) => {
  return {
    counter: state.counter + 1
  }
}

//dit is de reducer-functie: verandert de vorige state met de dispatched action naar een nieuwe state

const store = redux.createStore(counterReducer); 

//creëert een 'store'

console.log(store.getState()); 

//toont de eerste state (n het runnen van de reducer-functie)

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// dit is de subscriber-functie

store.dispatch({ type: 'increment'});

// dispatch is een action (een object)
```

Om een resultaat te bekomen wordt node aangeroepen in de terminal: 

```js
christianmarginet@Mac-mini-van-Christian .vscode % node redux-demo.js
{ counter: 1 }
{ counter: 2 }
```

Om aan te toenen hoe Redux werkt veranderen we even de code op het niveau van de counterReducer met if-statements en meerdere mogelijke return en onderaan code voegen we een nieuwe actie (dispatch) toe. Het zijn de acties (dispatches) die uiteindelijk zorgen dat er een output is. 

```js
const redux = require('redux');

const counterReducer = (state = { counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
  };
}
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }  
}

const store = redux.createStore(counterReducer); 

const counterSubsriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubsriber);

store.dispatch({ type: 'increment'});
store.dispatch({ type: 'decrement'});
```

```js
christianmarginet@Mac-mini-van-Christian .vscode % node redux-demo.js
{ counter: 1 }
{ counter: 0 }
```

Hier wordt dus eerst 1 opgeteld bij de default-value 0 en daarna wordt terug 1 afgetrokken, om op 0 te komen. 
