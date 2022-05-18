//Iteracion#1
//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const buttonShowMe = document.querySelector ("button.showme");
console.log (buttonShowMe);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const byIdH1 = document.querySelector("h1#pillado");
console.log (byIdH1);

//1.3 Usa querySelector para mostrar por consola todos los p
const allP = document.querySelectorAll ("p");
console.log (allP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const catchThemAll = document.querySelectorAll(".pokemon");
console.log(catchThemAll);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
const byDataFunction = document.querySelectorAll("[data-function=testMe]");
console.log(byDataFunction);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".
const byDataThird = document.querySelectorAll("[data-function=testMe]");
console.log(byDataThird[2]);

