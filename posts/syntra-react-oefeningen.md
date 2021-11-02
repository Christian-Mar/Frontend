---
title: Oefeningen React
excerpt: Props, useState, ... .
image: memo_syntra.jpg
isFeatured: true
date: '2021-11-01'
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


*Oefening 4*

Maak een lijst voor een magazijn, waarin het product en de hoeveelheid kan veranderd worden, waarbij ook ieder item via een button kan verminderd of vermeerderd worden met één eenheid. 

```js 
import { useState } from 'react'
import styles from './Warehouse.module.css';
import { MdEdit, MdCheck, MdDelete} from 'react-icons/md';

const Warehouse = () => {

  const [productList, setProductList] = useState([]); // array als geheel
  const [product, setProduct] = useState(''); // productitem
  const [count, setCount] = useState(0); // aantal productitems
	const [unit, setUnit] = useState(''); // eenheid
  const [productEditing, setProductEditing] = useState(null); //productitem veranderen
  const [editingText, setEditingText] = useState('') // tekst veranderen
  const [editingCount, setEditingCount] = useState(''); // aantal veranderen
	const [editingUnit, setEditingUnit] = useState(''); // eenheid veranderen

	function handleSubmit(e) {
		e.preventDefault();

		const newProduct = {
			id: new Date().getTime(),
			text: product,
			count: count,
			unit: unit
		};
		setProductList([...productList, newProduct]);
		setProduct('');
    setCount('');
		setUnit('');
	}

  function deleteProduct(id) {
		let updatedProducts = [...productList].filter(item => item.id !== id);
		setProductList(updatedProducts);
	}

  function submitEdits (id) {
		const updatedProducts = [...productList].map(item => {
			if (item.id === id) {
				item.text = editingText;
        item.count = editingCount;
				item.unit = editingUnit;
			}
			return item;
		});
		setProductList(updatedProducts);
		setProductEditing(null);
	}

  
	function decrement (id) {
		const updatedProducts = [...productList].map(item => {
			if (item.id === id) {item.count--}
		return item
	});
	setProductList(updatedProducts);
	}

	function increment(id) {
		const updatedProducts = [...productList].map(item => {
			if (item.id === id) {
				item.count++;
			}
			return item;
		});
		setProductList(updatedProducts);
	}
		

  return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor='productName' className={styles.label}>
					Nieuw product:
					<input
						className={styles.inputProduct}
						type='text'
						name='productName'
						onChange={e => setProduct(e.target.value)}
						value={product}
						required='required'
					/>
				</label>
				<label htmlFor='productCount' className={styles.label}>
					Aantal:
					<input
						className={styles.inputCount}
						type='number'
						name='productCount'
						onChange={e => setCount(e.target.value)}
						value={count}
						required='required'
					/>
					<select
						className={styles.inputUnit}
						type='text'
						name='unit'
						value={unit}
						onChange={e => setUnit(e.target.value)}
						required='required'
					>
						<option disabled value=''>
							Kies eenheid
						</option>
						<option value='kg'>kg</option>
						<option value='stuks'>stuks</option>
						<option value='dozen'>dozen</option>
						<option value='palletten'>palletten</option>
					</select>
				</label>
				<button className={styles.confirmationNewInput} type='submit'>
					Opname in de lijst
				</button>
			</form>

			{productList.map(item => (
				<div key={item.id} className={styles.item}>
					<div className={styles.itemText}>
						{item.id === productEditing ? (
							<form onSubmit={handleSubmit} className={styles.itemTextInput}>
								<input
									className={styles.itemInputText}
									type='text'
									onChange={e => setEditingText(e.target.value)}
									placeholder='product'
									required='required'
								/>
								<input
									className={styles.itemInputCount}
									type='number'
									onChange={e => setEditingCount(e.target.value)}
									placeholder='aantal'
									required='required'
								/>
								<select
									className={styles.itemInputUnit}
									type='text'
									name='unit'
									onChange={e => setEditingUnit(e.target.value)}
									required='required'
								>
									<option disabled value=''>
										Kies eenheid
									</option>
									<option value='kg'>kg</option>
									<option value='stuks'>stuks</option>
									<option value='dozen'>dozen</option>
									<option value='palletten'>palletten</option>
								</select>
							</form>
						) : (
							<div className={styles.itemDisplay}>
								<div className={styles.textDisplay}>{item.text}</div>
								<div>
									<div className={styles.countDisplay}>
										<button
											className={styles.countButton}
											type='submit'
											onClick={() => decrement(item.id)}
										>
											-
										</button>
										<div className={styles.count}>{item.count}</div>

										<button
											className={styles.countButton}
											type='submit'
											onClick={() => increment(item.id)}
										>
											+
										</button>
										<div className={styles.unit}>{item.unit}</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<div className={styles.actions}>
						{item.id === productEditing ? (
							<button
								className={styles.itemButton}
								onClick={() => submitEdits(item.id)}
							>
								Bevestig&nbsp;&nbsp; <MdCheck />
							</button>
						) : (
							<button
								className={styles.itemButton}
								onClick={() => setProductEditing(item.id)}
							>
								Wijzig&nbsp;&nbsp; <MdEdit />
							</button>
						)}

						<button
							className={styles.itemButton}
							onClick={() => deleteProduct(item.id)}
						>
							Verwijder&nbsp;&nbsp; <MdDelete />
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default Warehouse;

```

Oplossing oefening 4, de volledige code: [Github](https://github.com/Christian-Mar/warehouse)