---
title: useForm & yup 
excerpt: React-hook voor forms & validatie 
image: memo_react.jpg
isFeatured: true
date: '2021-10-21'
---

## useForm

### Start

We gaan uit van een eenvoudige *form*:

```js
import useFrom from 'react-hook-form';

const App = () => {
return (
<form>
<input type='text' placeholder='Email' name='email'/ >
<input type='password' placeholder='Password' name='password' / >
<input type='submit'/ >
</form>
)
}

export default App;
```

Daarvoor in npm:

```js
npm install react-hook-form
```

### De useForm hook

Binnen de functie van de form nemen *useForm* op als een variabele met een object die bestaat uit: {register, handleSubmet, errors}. Wat *useForm* doet is de verschillende states opnemen die anders dienen gedefinieerd te worden voor *register* & *errors*. In *useForm* gaat het enkel over het creëren van de form niet over de validatie.

- *register* nemen we op als ref in de *input*, waar dit in een klassiek formulier *onChange* zou zijn
-  *handleSubmit* nemen we op als *onSubmit* op de *form*

Om iets te doen met de verkregen data - bijvoorbeeld naar de server sturen - wordt de handleSubmit gedefinieerd aan de hand van een onSubmit-functie.

- *errors* voor de *error-handling* wordt opgenomen in de *ref* als onderdeel van *register*
met de nodige opties in een object

Eens de opties toegekend aan *register* kunnen de *errors* met een boodschap wordt getoond als ze zich voordoen: ```js {errors.password && <p>Password is invalid</p>} ```.  Deze boodschap kan ook meegeven worden in de error-opties: ```js ref={register({required: 'Password required', minLength: 8})} ```, waarbij de boodschap dan als volgt meegegeven wordt: ```js {errors.password && <p>{errors.password.message}</p>} ```.

```js
import useFrom from 'react-hook-form';

const App = () => {

const {register, handleSubmit, errors} = useForm();

const onSubmit = (data) => {
console.log(data)
}

return (
<form onSubmit={handleSubmit(onSubmit}>
<input type='text' placeholder='Email' name='email' ref={register({required: true})}/ >
<input type='password' placeholder='Password' name='password'
ref={register({required: true, minLength: 8})}/ >
{errors.password && <p>Password is invalid</p>}
<input type='submit'/ >
</form>
)
}

export default App;
```

### De validatie met yup

Met yup wordt gezorgd voor validatie en worden de error-messages gegenereerd.

```js
npm install yup @hookform/resolvers/yup
```

De *yupResolver* maakt de connectie tussen de *useForm* en *yup*.

Het eerste wat we vervolgens doen is de import en een schema opzetten voor de verschillende inputs. In het object van het schema moeten de namen exaxt hetzelfde zijn als de 'name' van de input, waaraan dan enkele kenmerken gekoppeld worden.

Dit schema wordt via *destructuring* in de functie van de component gebracht. Wat blijft, zijn *register*, *handleSubmit* en *errors*. Wat binnengebracht wordt in *useForm* is: { resolver: yupResolver(schema) }.

De fout-meldingen gebeuren default, maar kunnen aangepast worden in het schema. De foutmelding wordt onder jsx-tags ingevoegd zoals in het voorbeeld hieronder. Het vraagteken stelt als het ware de vraag of er fouten zijn. 

```js
import useFrom from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
email: yup.string().email().required(invullen van e-mail is verplicht),
password: yup.string().min(4).max(15).required(), //min & max is the length
});

const App = () => {

const {register, handleSubmit, errors} = useForm({
resolver: yupResolver(schema)});

const onSubmit = (data) => {
console.log(data)
// zou bijvoorbeeld ook een fetch kunnen zijn om de data naar een api te sturen 
}

return (
<form onSubmit={handleSubmit(onSubmit}>
  <input type='text' placeholder='Email' name='email' ref={register}/ >
  <p> {errors.email?.message} </p>
  <input type='password' placeholder='Password' name='password'
  ref={register}/ >
  <p> {errors.password?.message}
  <input type='submit'/ >
</form>
)
}

export default App;
```

Om bijvoorbeeld inputs te vergelijken, zoals bij het bevestigen van het paswoord door het nogmaals te laten herhalen kan de volgende syntax gebruikt worden in het schema:

```js
confirmPassword: yup.string().oneOf([yup.ref('password'), null])
```
