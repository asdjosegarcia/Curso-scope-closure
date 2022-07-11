/* function moneyBox(coins) {
    let saveCoins=0;
    saveCoins+=coins;
    console.log(`MoneyBox: $${saveCoins}`);
}
moneyBox(5);
moneyBox(5); */

function moneyBox() {
    console.log('savecoins');
    let saveCoins = 0;
    function countCoins(coins) {
        console.log('eeeee'+coins)
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    console.log('count coins');
    return countCoins;
};
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);
const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

//Una clausura o closure es una función que guarda referencias del estado adyacente (ámbito léxico). En otras palabras, una clausura permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.