function fruits() {
    if (true) {//lo que esta dentro de co que esta dentro de corchetes es un bloqueorchetes es un bloque
        var fruit1 = 'Apple';//function scope (alcance en toda la funcion)
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope (alcance solo en el bloque)
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits();