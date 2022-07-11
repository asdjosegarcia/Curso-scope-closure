const myGlobal = 'global';

function myFunction() {
    const myNumber = 'number';
    console.log(myNumber + ' myfunction ');

    function parent() {//function interna 
        const inner = 'inner';
        console.log(myNumber, myGlobal + ' parent ');

        function child() {
            console.log(inner, myNumber, myGlobal +' child');
        }
        return child();
    };
    return parent();
};
myFunction(); 

//un clouse es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el operador return

/* 
Los closures permiten acceder al ámbito de una función exterior desde una función interior. En javascript, los closures se crean cada vez que una función es creada.

Los closures no son siempre utilizados.

Un closure es cuando una función accede a una variable fuera de su contexto.

Al trabajar con closures entra en juego el concepto de alcance de las variables. 
*/