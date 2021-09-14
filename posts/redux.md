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

Bij *cross-component state* wordt gebruik gemaakt van *prop chains* of *prop drilling*. Bvb. de open/closed state van een *modal overlay*. Bij *app-wide state* gaat het bijvoorbeeld over *user authentification status*. Hier ook *prop chains/prop drilling*.

### Wat is het verschil met useContext?

In complexe apps leidt useContext tot deep nesting in JSX en grote *context provider components*. Dit maakt het tot een complexe setup. Anderzijds weegt het op performance als de state met hoge frequentie verandert. 

### Hoe werkt het?

Het heeft één *Central Data (State) Store*. 

De componenten hebben een *subscription* voor het gebruik van de State, maar veranderen de State niet rechtstreeks! De manipulatie loopt via een *Reducer Function*. Dit is niet hetzelfde als useReducer!!! 

Onrechtstreeks wordt de State veranderd door de *components*, die *actions* dispatchen en op hun beurt doorgestuurd worden naar de *Reducer Function*. 

### Starten 

We starten los van React. We installeren redux en roepen het op via node. De hierna volgende code is de basis of de essentie van redux. 

```js
npm install redux
```

Het importeren gebeurt via node.js. Daarna volgt een reducer-functie (geeft de initële state aan)(1), een store (die met getState kan opgeroepen worden)(2), een subscriber-functie (die de volgende state aangeeft)(3) en tenslotte de dispatch-functie (die er voor zorgt dat een actie uitgevoerd wordt, anders gebeurt er nog niets)(4):

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

//toont de eerste state (na het runnen van de reducer-functie)

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

Dus: 

1. Reducer-functie
2. Store
3. Subscriber-functie
4. Dispatch-functie


Om aan te tonen hoe Redux werkt, veranderen we even de code op het niveau van de counterReducer met if-statements en meerdere mogelijke returns, en onderaan de code voegen we een nieuwe actie (dispatch) toe. Het zijn de acties (dispatches) die uiteindelijk zorgen dat er een output is. 

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


Hier wordt dus eerst 1 opgeteld bij de default-value 0 en daarna wordt terug 1 afgetrokken, om terug op 0 te komen. 

### React-project

We installeren nu zowel *redux* als *react-redux*. Redux op zich staat volledig los van react, vandaar dat dit tweede package ook dient geïnstalleerd te worden om het ten volle te kunnen benutten voor react. 

```js
npm install redux react-redux
```

We maken index.js aan in een afzonderlijke store-folder, waarin we slechts de reducer-functie en de store aanmaken. Dus, nog geen subscriver-functie en dispatch van een action. 

```js
import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  };

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;

};

const store = createStore(counterReducer);

export default store; 
```

Vervolgens gaan we in de hoogste parent <App /> wrappen met <Provider> en ook daar de *store* importeren. Dit maakt de store beschikbaar in de volledige app. 

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index'

ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
```

Nu de *store* overal beschikbaar is kan deze gebruikt worden in de verschillende componenten. In de component wordt de data van de store opgevraagd via **useSelector()**, die geïmporteerd wordt uit 'react-redux'.  

```js
import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  //useSelector om de data uit de store te ontvangen. 
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

Hiermee hebben nu de actuele state en dienen we nog een dispatch toe te voegen om iets te veranderen aan de data of de state. 
