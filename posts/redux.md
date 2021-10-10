---
title: Redux 
excerpt: Alternatief voor useContext
image: memo_react.jpg
isFeatured: false
date: '2021-09-13'
---

### Wat is Redux?

*A state management system for cross-component or app-wide state*

Bij *local state* gaat het om één enekel component. Bvb. user-input in een form. Hiervoor wordt gebruikt gemaakt van useState() en useReducer().

Bij *cross-component state* wordt gebruik gemaakt van *prop chains* of *prop drilling*. Bvb. de open/closed state van een *modal overlay*. Bij *app-wide state* gaat het bijvoorbeeld over *user authentification status*. Hier ook *prop chains/prop drilling*.

### Wat is het verschil met useContext?

In complexe apps leidt useContext tot deep nesting in JSX en grote *context provider components*. Dit maakt het tot een complexe setup. Anderzijds weegt het op performance als de state met hoge frequentie verandert. Dus, voor veel en regelmatige updates van state-veranderingen is redux de betere oplossing. Evenwel, redux is een bijkomende package en maakt daardoor de applicatie weer zwaarder. Daarom is het nu ook niet altijd de betere oplossing. 

### Hoe werkt het?

Het heeft één *Central Data (State) Store*. 

De componenten hebben een *subscription* voor het gebruik van de State, maar veranderen de State niet rechtstreeks! De manipulatie loopt via een *Reducer Function*. Dit is niet hetzelfde als useReducer!

Onrechtstreeks wordt de State veranderd door de *components*, die *actions* dispatchen en op hun beurt doorgestuurd worden naar de *Reducer Function*. 

### Starten 

We starten los van React. We installeren redux en roepen het op via node. De hierna volgende code is de basis of de essentie van redux. 

```js
npm install redux
```

Het importeren gebeurt via node.js. Daarna volgt een reducer-functie (geeft de initële state aan) (1), een store (die met getState kan opgeroepen worden) (2), een subscriber-functie (die de volgende state aangeeft) (3) en tenslotte de dispatch-functie (die er voor zorgt dat een actie uitgevoerd wordt, anders gebeurt er nog niets) (4):

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

We maken index.js aan in een afzonderlijke store-folder, waarin we slechts de reducer-functie en de store aanmaken. Dus, nog geen subscriber-functie en dispatch van een action. 

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

Hiermee hebben nu de actuele *state* en dienen we nog een dispatch toe te voegen om iets te veranderen aan de data of de state. Dit doent we met **useDispatch()**:

```js
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  //useSelector om de data uit de store te ontvangen. 

  const incrementHandler = () => {
    dispatch( { type: 'increment'})
  };

  const decrementHandler = () => {
    dispatch( { type: 'decrement'})
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
```

Om de dispatch dynamischer te maken:

```js
//index.js in store
if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }
```

```js
//Counter.js in components
const increaseHandler = () => {
    dispatch( {type: 'increase', amount: 5 })
  }   

```

Hierin kan ook gewerkt worden met *Multiple State Properties*.  

De bestaande *state* zelf mag nooit rechtstreeks veranderd worden, maar moet overschreven worden. Daarom wordt de return in de *store* telkens weergegeven in een object.  

Om een aantal zaken te vereenvoudigen kan gewerkt worden met 'Redux toolkit'.

```js
npm install @reduxjs/toolkit
```

Redux zit al in Redux toolkit, waardoor Redux mag geschrapt worden in package.json. 

Met **createSlice()** groeperen we gelijkaardige *states* in de *store*.
Met **configureStore()** organiseren we de reducer(s). In het object worden meerdere reducers gemerged tot één globale reducer. De *actions* lopen zo goed al automatisch met de toolkit. Zie onderstaande code (store & counter):

```js
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    }, // payload is een reserved word hierin
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer  
});

export const counterActions = counterSlice.actions;

export default store; 
```

```js
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  //useSelector om de data uit de store te ontvangen. 

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }   

  const decrementHandler = () => {
    dispatch(counterActions.decrement() );
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increase by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

```

Ook met meerdere gecreëerde *slices* blijft er maar één store, met één root-reducer. De verschillende reducers worden dan samengebracht in een object van de globale reducer. Het blijft echter mogelijk om de code te splitsen en deze dan te importeren in de finale *store*, maar het blijft nog steeds één *store*.    


