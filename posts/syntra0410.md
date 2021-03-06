---
title: Syntra introductie React 
excerpt: Components & props 
image: memo_react.jpg
isFeatured: false
date: '2021-10-04'
---
### Installatie

```js
npx create-react-app my-app
cd my-app
npm start
```

### De essentie

In React wordt de code via ReactDom geconcentreerd naar één html element met 'root' als id:

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));}

setInterval(tick, 1000);
```

Naarmate de code langer is, kan deze opgesplitst worden in componenten die een *tree* of hiërarchie vormen en geïmporteerd worden in de parent, die men uiteindelijk gaat renderen.  

### Components en props

Props zijn read-only en geven properties door van de parent naar de child. De component zelf wordt met een hoofdletter geschreven en kan als jsx-tag overgenomen worden in de parent, zoals hieronder: <Welcome />.

Parent

```js
function App() {
  return (
    <div>
      <Welcome name="Sara" />      
      <Welcome name="Cahal" />      
      <Welcome name="Edite" />    
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Child

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Spread operator destructuring

Om de code de vereenvoudigen kan gebruik gemaakt worden van de spread operator in het doorgeven van props, zoals hier:

```js
function MainComponent(){
  const props = { firstName: "Jack", lastName: "Skeld" }
  return <Hello {...props} />
}
```

Om niet in iedere tag de property te moeten laten voorafgaan door props kan een variabele aangemaakt worden die alle props aangeeft: 

```js
const Book = (props) {
  const {img, title, author} = props
  return (
    <article>
      <img src={img} alt=''}/ >
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
```

De aangemaakte const kan ook meteen als parameter meegeven worden en dan geschreven als een object: 

```js
const Book = ({img, title, author}) {
  ...
}
```

De {children}-prop geeft ook alle children mee van de elementen die in de specifieke component staan. Bijvoorbeeld: 

```js
const Book = (props) {
  const {img, title, author, children} = props
  return (
    <article>
      <img src={img} alt=''}/ >
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};
```
Als er bijvoorbeeld in een geïmporteerde Book-component tussen <Book>-tags ook een <p>-tag staat, zal ook de tekst van die <p>-tag weergegeven worden. 

### JS in JSX

Om JavaScript elementen in JSX te zetten wordt gebruik gemaakt van { }:

```js
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) { description = <strong>even</strong>; } else { description = <i>odd</i>; }  
  return
  <div>{props.number} is an {description} number</div>;
}
```

Indien een object uit de JavaScript code wordt doorgegeven wordt gebruik gemaak van dubbele { }. De eerste (buitenste) { } geven aan dat het om JavaScript gaat, de tweede (binnenste) geven aan dat het om een object gaat.

Zo ook bij het importeren van components zullen { } gebruikt worden als de functie of variabele gewoon geëxporteerd wordt (*export *) en niet als *export default*.

