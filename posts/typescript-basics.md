---
title: TypeScript fundamentals 
excerpt: Typescript basisbegrippen & syntax
image: memo_typescript.jpg
isFeatured: true
date: '2021-09-24'
---

### De voordelen

- *Types* worden gedefinieerd = gerichter coderen
- Fouten worden weergegeven tijdens het ontwikkelen

### Starten

Node.js is geïnstalleerd

Installeren van TypeScript voor ontwikkeling: 

```js
npm install typescript --save-dev
```

Globally

```js
npm install -g typescript
```
Installeren van compiler om TypeScript om te zetten naar JavaScript

```js
npx tsc
```

Dit op zich volstaat nog niet. Er dient ook een declaratie-file aangemaakt te worden als er via *npx tsc* niet expliciet naar een specifieke file wordt verwezen. Er dient aangegeven te worden welke files moeten omgezet worden. 

```js
npx tsc with-typescript.ts
```

Voor het opstarten van een app in React: 

```js
npx create-react-app my-app --template typescript
```

### Basis syntax

Primitives: numbers, strings & booleans

```js
let age: number; // type wordt telkens in kleine letters geschreven

age = 12;

let userName: string;

userName = 'Max'

let isInstructor: boolean;

isInstructor = true;
```

Complexere types: objects & arrays

```js
let hobbies: string[];

hobbies = ['sports', 'cooking'];

let person: {
  name: string;
  age: number;
}; 

person = {
  name: 'Max',
  age: 32
};

let people: {
  name: string;
  age: number;
}[]

// in dit laatste voorbeeld maken we een array van objecten
```

Type inference

Het expliciet aangegeven van het type is niet noodzakelijk. 

```js
let course = 'React - The Complete Guide'

course = 13456 // dit geeft een error, gezien de variabele reeds toegewezen is aan een string
```

Tot nu toe werd telkens gebruikt gemaakt van één type. Wat als er meerdere types mogelijk zijn? Dit kan opgelost worden met de *'or'-operator*:

```js
let course: string | number = 'React - The Complete Guide'

course = 13456 //dit geeft geen fout, gezien de mogelijke types aangegeven zijn
```

Om herhaling te voorkomen en de code niet nodeloos lang te maken, kunnen we een 'type' aanmaken zoals ook een vairabele aangemaakt wordt:

```js
type Person = {
  name: string;
  age: number;
};

let person: Person;
```

Functies

```js
function add(a: number, b: number): number | string {
  return a + b;
}
```

Bij functie is er een specifiek type: 'void'. Dit is gelijkaardig aan *null* & *undefined*, en wordt toegekend aan functies zonder return zoals bijvoorbeeld met een *console.log*. 

Generetics

De <T> maakt dat het over om het even welk type kan gaan, maar waar T terugkeert komt het erop neer dat de types steeds dezelfde moeten zijn. Bijvoorbeeld: numbers. Dit zorgt enerzijds voor flexibiliteit, anderzijds voor stabiliteit. 

```js
function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a','b','c'], 'd')
```

### Oefening - project

```js
npx create-react-app react-ts --template typescript
```
