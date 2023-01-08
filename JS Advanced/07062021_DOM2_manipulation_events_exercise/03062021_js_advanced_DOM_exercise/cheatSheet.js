//Selecting DOM Elements
let element = document.getElementById('test');
document.querySelector('#test') // .class/#id/ .class > tag(directly under)
document.querySelectorAll('#test li')   // html collection (not a real array) 
//Array.from(html collection) 

// get/set content
el.value;
el.children;

//traversing DOM
el.parentElement;
el.children;

//create element
let createdElem = document.createElemenmt('p');

//adding to DOM
el.appendChild(createdElem);

//delete from DOM
createdElem.remove();

//events
el.addEventListener('click'.someFunction);
el.target;
el.currentTarget;

//remove event
el.removeEventListener('click', someFunction);




