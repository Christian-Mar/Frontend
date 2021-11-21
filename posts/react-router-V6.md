---
title: React Router V6 
excerpt: nieuwe syntax in V6
image: memo_react.jpg
isFeatured: false
date: '2021-11-21'
---

## Switch wordt vervangens door Routes

Elke Route wordt een *self closing* element.

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

// styles
import './App.css'

function App() {
  return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />}/>
					<Route path='/create' element={<Create />} />
					<Route path='/search' element={<Search />}/>
					<Route exact path='/recipes/:id' element={<Recipe />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App
```