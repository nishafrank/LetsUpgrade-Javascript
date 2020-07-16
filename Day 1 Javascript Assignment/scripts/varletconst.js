//var  - to declare the variable globally
var name="nisha"   //string
var age= 38;   //number
var canFly= false;    //boolean
var laguages = ['malayalam','English'];   //array
var friends={name:'Vishal', hobby:'reading'};   // objects
var a=10;
console.log(a);
var a= null;
console.log(a);
//let - BLOCK SCOPED - to declare the varaiable within the block; it wont affect the value of same named variable outsdie the block/globally. In 'let' you can initialize the varaiable and assign the value later.

// {} curly braces to show the block of code
{
let name=" Nisha";
name = "Robin";
console.log("Using let", name);
}
console.log(name);

//const - constant
// in const you cannot initailze first without assigning the value

const country= "India";
console.log(country);
//const country = "UK"; you cannot use the same varaible name in const declaration

const _fruits = ["mango", "banana"];
console.log(_fruits);
_fruits.push("apple");
console.log(_fruits);

//const fruits = ["orange", "grapes"]; it'll throw an error because in const we cannot use the same array name twice to declare

/* Naming a variable
1. variable name cannot start with the number
2. It can start with the letter, $, _
3. $ is mainly used in JQuery
4. _ is used to declare private variables [OOPS in Javascript]

1. camelCase
2. kebabCase
3. snakeCase
4. pascalCase
*/

