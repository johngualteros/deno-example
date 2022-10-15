// import { add } from 'https://raw.githubusercontent.com/https://github.com/selfrefactor/rambda/master/dist/rambda.esm.js';

// console.log(add(1, 2));
// serve((_req) => new Response("Hello Deno\n"), { port: 8000 });


const response = await fetch('https://pokeapi.co/api/v2/pokemon/700')
const data = await response.json()
console.log(data)


localStorage.setItem('name', data.name)

console.log(localStorage.getItem('name'))