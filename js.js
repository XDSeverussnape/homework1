const credits = 23500;
const prisePerDroid = 3000;
const howMany = prompt("Сколько дроидов хотите купить ?", "");
const totalPrise = howMany*prisePerDroid;
let changeAmount = credits - (howMany*prisePerDroid);

(function buy() {
    if (howMany === null) {
        alert("Отменено пользователем!");
    } else {
        if (totalPrise < credits) {
            alert(`Вы купили ${howMany} дроидов, на счету осталось ${changeAmount} кредитов.`);
        } else {
           alert("Недостаточно средств на счету!"); 
        }
    }
}());

console.log(howMany);