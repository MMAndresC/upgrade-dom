//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const contDiv = document.createElement ('div');
const contP = document.createElement('p');
document.body.appendChild(contDiv);
contDiv.appendChild (contP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const contDiv6P = document.createElement('div');
document.body.appendChild(contDiv6P);

for (let i=1; i <=6; i++){
    const divP = document.createElement ('p');
    contDiv6P.appendChild(divP);
}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const containerP = document.createElement('p');
containerP.innerText = 'Soy dinamico';
document.body.appendChild(containerP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const byH2Class = document.querySelector('.fn-insert-here');
byH2Class.innerText = 'Wubba Lubba dub dub'

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listUl = document.createElement('ul');
apps.forEach((item)=>{
    console.log(item);
    const itemLi = document.createElement('li');
    itemLi.innerText = item;
    listUl.appendChild(itemLi);
});
document.body.appendChild(listUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me 
const eraseByClass = document.getElementsByClassName('fn-remove-me'); //si que hace la lista pero no me funciona el borrado con este
const erase =document.querySelectorAll ('.fn-remove-me'); //me funciona con este
console.log(eraseByClass);
console.log(erase);
erase.forEach((item)=>{
    item.remove();
})

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.
const divContainer = document.querySelector('div').nextElementSibling;
const pContainer = document.createElement('p');
pContainer.innerText = 'Voy en medio';
console.log (divContainer);
document.body.insertBefore(pContainer, divContainer); 



//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

document.querySelectorAll('div.fn-insert-here').forEach(function(item){
    const insideP = document.createElement('p');
    insideP.innerText = 'Voy dentro';
    item.appendChild(insideP);
})
