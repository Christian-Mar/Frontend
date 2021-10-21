---
title: Oefeningen React
excerpt: Props, useState, ... .
image: memo_syntra.jpg
isFeatured: true
date: '2021-10-20'
---

## 11/10/2021 Props + useState

*Oefening 1*

- Maak een button-component
- Maak een *prop* voor de tekst van de button
- Gebruik die button op een pagina
- Maak een image-component
- Zorg voor een random image in de component via https://picsum.photos/
- Toon de image in de browser
- Bij clicken op de button wordt een nieuwe random image weergegeven

*Oefening 2*

- Maak een array van objecten met informatie van de mensen uit de klas
- Maak een component die de hele lijst gaat opstellen
- Maak een component per persoon
- EXTRA: Voeg de mogelijkheid toe of ze een dier hebben, indien er een dier is ingevuld, toon dat op de pagina (Dier: ‘Hond’, Naam v/h dier: ‘Fluffy’). Als de persoon geen dieren heeft, willen we ook de labels Dier & Naam v/h dier niet zien. Tip: Dit stukje kan je ook in een aparte component onderbrengen.

Oplossing oefening 1 & 2: [Github](https://github.com/Christian-Mar/syntra_exercise_useState).

*Oefening 3*

Maak een eenvoudige 'to do'-app, waarbij *to do's* ingevoegd worden, upgedate worden en kunnen verwijderd worden. 

*Analyse vooraf: state van de todo (via input) en state van de lijst met alle todo's. Daarin is er de tekst van de todo en de eigenschap nog bezig of afgewerkt. Het deleten van de todo is een afzonderlijke functie.*

```js
import { useState } from 'react';
import './Input.css';

const Input = () => {

  // state: starting with the content of the todo + state 'not done'

	const [input, setInput] = useState({
		todo: '',
		isDone: false,
	});

	// list, starting from an empty array

	const [todos, setTodos] = useState([]);

	// introduction of methods: add (item to the list), completed (the item), delete (the item)

	const add = () => { 
		if (input.todo) { // if there's a new text for a todo 
			setTodos([...todos, input]); // update with new input ('...todos' are existing todos, 'input' is new input)
			setInput({ // complete item
				todo: '',
				isDone: false,
			});
		}
	};

	const completed = index => { // starting from the index because of the individual item
		const todo = todos[index]; // individual item
		const todoList = [...todos];
		const update = {
			...todo, // list stays the same
			isDone: !todo.isDone, //listItem changes from true to false or false to true
		};
		todoList[index] = update; // update specific index (listItem)
		setTodos(todoList); // new state of the list
	};

	const deleteTodo = index => {
		const todoList = [...todos]; // list
		todoList.splice(index, 1); // slice one of the list
		setTodos(todoList); // new state of the list
	};

  /* 
  In the return: 
  - we take the target.value from the inputfield with the button calling the add function (the input.todo is the setInput of the onChange)
  - todos is the list-state, on which we map, returning one or more <li>
  - the <li> has a key, here the 'index' 
  - the <li> has a content, here the value of the input 
  - In the <li> we have a button to make it 'done' and a button to delete. They call the functions 'completed' & 'deleteTodo' 
  */ 

	return (
		<div>
			<h3>Enter your 'to do':</h3>
			<input
				type='text'
				value={input.todo}
				onChange={e =>
					setInput({
						todo: e.target.value,
						isDone: false,
					})
				}
			/>
			<button onClick={() => add(input)}>Add</button>
			<ul>
				{todos.length > 0 &&
					todos.map((value, index) => {
						return (
							<li key={index}>
								{value.todo}
								<div>
									<button onClick={() => completed(index)}>
										{value.isDone ? 'Task is done' : 'Ok'}
									</button>
									<button onClick={() => deleteTodo(index)}>Delete</button>
								</div>
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default Input;

```

Oplossing oefening 3: [Github](https://github.com/Christian-Mar/react_todo).