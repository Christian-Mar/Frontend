---
title: Syntra herhalingsles 
excerpt: Reduce-methode arrays & api-fetch 
image: memo_javascript.jpg
isFeatured: false
date: '2021-09-27'
---

## reduce-methode

Tel de values van een array bij elkaar op

```js
[1, 2, 3].reduce( myFunction, 0);			// 0 is de beginwaarde, niet de index!!!

const myFunction = (acc, cv) => {
	return acc + cv;
	}
```

Zoek de 12

```js
[1, 4, 12, 22].reduce(myFunction, 0);

const myFunction = ((acc, cv) => {
	if (cv === 12) {acc = true;
	}
	return acc;
	}, false)
```

Oefening: zoek het op één na grootste getal

*eigen oplossing*

```js
const arrFindSecondLargest = [1, 2, 12, 12, 22, 5].sort((a, b) => {
  return b - a;
}).[1];
console.log(arrFindSecondLargest);
```

*alternatieven*

```js
//in een array het 2de grootste element weergeven
const arrayOfNumbers = [1, 26, 23, 22];
function tweedeGrootste(arrayOfNumbers) {
  eersteGrootste = Math.max(...arrayOfNumbers);
  index = arrayOfNumbers.indexOf(eersteGrootste);
  arrayOfNumbers.splice(index, 1);
  tweedeGrootste = Math.max(...arrayOfNumbers);
  return (tweedeGrootste)
}
const uitkomst = tweedeGrootste(arrayOfNumbers);
console.log(uitkomst);
```

```js
const input = [1, 4, 12, 22, 5, 43, 128, 2, 21];

const secondMax = function () {
  const max = Math.max.apply(null, input);
  input.splice(input.indexOf(max), 1);
  return Math.max.apply(null, input); 
};

console.log(secondMax())
```

```js
myArray = [ 27, 20, 9, 87, 3, 28, 2 ];

// 	Getallen sorteren op grootste
// 	En tweede grootste nemen

const myFunctionWithoutReduce = (array) => {
  const sortedList = myArray.sort(function(a, b){return a-b});
  return sortedList[sortedList.length - 2];
}

console.log(`Second highest number =`, myFunctionWithoutReduce(myArray) );
```

```js
const myArray = [1, 62, 25, 14, 77,12]

const secondBiggestNumber = myArray.reduce((acc, cv) => {
  
  
  if(cv > acc.max) {
    acc.largestSecond = acc.max
    acc.max = cv;
    
    
  } else if (cv > acc.largestSecond && cv < acc.max) {
    acc.largestSecond = cv
  }
  
  return acc
}, {largestSecond: 0, max: 0})

console.log(secondBiggestNumber)
```

## Fetch API yahoo-finance

HTML

*eigen oplossing*

```html
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>Fetching the Yahoo Finance API</title>
</head>
<body>
  <h1>Minimum- en maximumkoers via Yahoo Finance </h1>

    <div>
    <form id="form">
      <input type="text" id="stock" name="stock" placeholder="Ticker" maxlength="8" required><br><br>
      <input type="submit" id="enterTicker"></input>
    </form>
    </div>
    <div id="overview"></div>
    <script type="text/javascript" src="index.js"></script>
</body>
</html>
```

JAVASCRIPT

```js
const form = document.getElementById('form');
const overview = document.getElementById('overview');

form.addEventListener('submit', async e => {
    e.preventDefault();
    
    const ticker = document.getElementById('stock').value;
   
    await fetch(`https://rest.yahoofinanceapi.com/v6/finance/quote?symbols=${ticker}`, {
      method: "GET", 
      headers: {     
        'Content-Type': 'application/json',
        'x-api-key':
          'insert KEY here!',
      }, 
    })
    .then (response => response.json())
    .then (data => {
        const name = data.quoteResponse.result[0].longName;
        const market = data.quoteResponse.result[0].fullExchangeName;
        const low = data.quoteResponse.result[0].fiftyTwoWeekLow;
        const high = data.quoteResponse.result[0].fiftyTwoWeekHigh;
        const currency = data.quoteResponse.result[0].financialCurrency;
        const stock = document.createElement('p');
        overview.innerHTML ='';
        stock.textContent =`${name} noteerde in de voorbije 52 weken op ${market} het laagst aan ${low} ${currency} en het hoogst aan ${high} ${currency}.`;
        overview.appendChild(stock);
    })
    .catch(function(err) {  
        alert('Helaas, er is iets verkeerd gelopen', err);
      }); 
});
```

## .env

Voor het opslaan van environment variables (keys, paswoorden, andere) kan een afzonderlijke file aangelegd worden in de root: *.env*. Deze file kan via gitignore buiten de upload naar Github gehouden worden, zodat de keys, paswoorden of url's niet publiek komen te staan. 

De .env-file heeft een eenvoudige syntax, met gebruik van hoofdletters (in TypeScript worden de types nog afzonderlijk bepaald binnen dezelfde file): 

```js
PASSWORD="12345"
```

Om de data uit de .env-file te lezen wordt *dotenv* geïnstalleerd: 

```js
npm install dotenv
```

Uiteindelijk wordt dan in de code van de pagina of component *dotenv* geïmporteerd, de functie gecalled (!) en het gegeven opgeroepen uit de .env-file:

```js
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.PASSWORD);
```

