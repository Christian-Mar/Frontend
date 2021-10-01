---
title: Javascript herhaling 
excerpt: reduce-methode arrays & api-fetch 
image: memo_syntra.jpg
isFeatured: true
date: '2021-09-27'
---

### reduce-methode


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

```js
const arrFindSecondLargest = [1, 2, 12, 12, 22, 5].sort((a, b) => {
  return b - a;
}).[1];
console.log(arrFindSecondLargest);
```

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

### Fetch API yahoo-finance

...

