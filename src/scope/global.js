//variables

var a;//declarando variable
var b ='b';//declaramos y /asignando una variable
b ='bb'; //reasiganando una variable
var a='aa';//redeclaracion

//Global scope
var fruit='Apple';//global
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}
bestFruit();
function cuonties(){
    cuontry='colombia';//aui la estamos declarando como global :o (funciona fuera del function)
    console.log(cuontry);
}
cuonties();
console.log(cuontry);