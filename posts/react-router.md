---
title: Router 
excerpt: Gebruik van Link of Navlink via react-router-dom
image: memo_react.jpg
isFeatured: false
date: '2021-10-10'
---

## Probleem

Bij het het gebruik van een <a>-tag in HTML en ook in JSX gaat de app telkens opnieuw renderen en dus connectie gaan maken met de server. Binnen React is het net de bedoeling om zoveel mogelijk binnen de de bundel te blijven en geen snelheid te verliezen door telkens opnieuw te renderen. 

## Oplossing

*Link* of *NavLink* gebruiken. Dan is er geen *reloading* van de pagina. Het voordeel van *NavLink* is dat er een eigen styling kan op gebeuren, bijvoorbeeld om te tonen dat deze link nu actief is. 

## react-router-dom

react-router-dom zit niet standaard in de *create-react-app* en dient afzonderlijk geïnstalleerd te worden. 

```js
npm install --save react-router-dom
```

## Importeren en gebruiken

In de 'app.js' op de root importeren we: 

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
```

Na import kunnen we <Router></Router> wrappen rond de jsx in app.js waardoor alle geneste componenten kunnen gebruik maken van de Router. 

```js
const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<h1>Start</h1>
			</div>
		</Router>
	);
};
```

Vervolgens introduceren we <Switch></Switch> op de plaats waar we naartoe willen navigeren. De Switch-component zorgt er voor dat er telkens maar één route getoond wordt. 

```js
const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch></Switch>
			</div>
		</Router>
	);
};
```

Tussen de <Switch>-tags worden de routes gedefiniëerd. Voor de homepage is dit path="/", naar een about-page zal dit path="/about" zijn bijvoorbeeld. Binnen de <Route>-tags wordt dan de component geplaatst die zal getoond worden. 

```js
const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
			</div>
		</Router>
	);
};
```


In dit voorbeeld zal de <Navbar> altijd blijven verschijnen en de inhoud tussen de <Switch>-tags wijzigigen naarmate er meerdere routes zijn. 

Om *Link* en *NavLink* te kunnen gebruiken moet deze *Router* aangelegd zijn. Daarin kan er dan een link gelegd worden naar de content die men wil tonen. 

## ... nog een probleem

React neemt de eerst route die het tegenkomt en als dit een geldige route is - bijvoorbeeld naar de homepage - dan zal bij om het even welke url enkel de homepage getoond worden. 
Om dit tegen te gaan voegen we *exact* toe aan *path"! 

```js
const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
```

## Link en NavLink

De syntax is als volgt: 

```js
<Link to="/">Home</Link>

<NavLink to="/" activeClassName="active">Home</NavLink>
```

Dus, *'to'* in plaats van *'href'*.

Voor wat *activeClassName* betreft, een eenvoudig voorbeeld op [Codepen](https://codepen.io/karlsn/pen/vRKmRM).

## ...  en nog een probleem 

Als de pagina nog aan het renderen is bij een fetch en er wordt al een volgende link aangeklikt, krijgen we een fout. 

Om dit te verhelpen dient bij het aanklikken van een nieuwe link de vorige fetch afgebroken te worden. 

Meer uitleg op [The Net Ninja](https://www.youtube.com/watch?v=aKOQtGLT-Yk).