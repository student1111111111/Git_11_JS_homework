// ДЗ_1
// Задача 1. Дано масив цілих чисел. Кожне від’ємне число замінити на 0.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor((Math.random() - Math.random()) * 100);
    }

    console.log(arr);

    function negativeToZero(x, i, arr) {
        if (x < 0) {
            return arr[i] = 0;
        }
    }

    arr.forEach(negativeToZero);
    console.log(arr);
}

// Задача 2. Дано масив цін. Сформувати новий масив, який містить тільки ті ціни, які менші за задану.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    let randnomNumber = Math.floor(Math.random() * 100);
    console.log(randnomNumber);

    function ifLess(x, i, arr) {
        return (x < randnomNumber);
    }

    let newArr = arr.filter(ifLess);
    console.log(newArr);
}

// Задача 3. Дано масив цін товарів. Для цін, які менші за 1000грн. додати 20% ціни, для тих, які більші за 1000 грн. відняти 30%.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 2000 + 1);
    }

    console.log(arr);

    function price1000(x, i, arr) {
        if (x < 1000) {
            return arr[i] = Math.floor(x * 1.2);
        }
        if (x > 1000) {
            return arr[i] = Math.floor(x * 0.7);
        }
    }

    console.log(arr.forEach(price1000));
}

// Задача 4. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.
{
    let nameArray = ["Vasia", "Larysa", "Max", "Misha", "Vania", "Valera", "Lera", "Katia"];

    console.log(nameArray);

    let firstSymbolName = prompt("Enter the first character of the name", "M");

    function someNameArray(x, i, arr) {

        let elementOfArray = x.split("");

        if (elementOfArray[0] == firstSymbolName) {
            return x;
        }
    }

    let newNameArray = nameArray.filter(someNameArray);
    console.log(newNameArray);
}

// Задача 5. Дано ваги автомобілів на парковці. З’ясувати, чи усі автомобілі є легковими (легшими за 2000 кг).
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 10 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 4000 + 1);
    }

    console.log(arr);

    function weigher(x, i, arr) {
        return x < 2000;
    }

    console.log(arr.every(weigher));

}

// Задача 6. Дано масив, який зберігає кількість відвідувачів протягом тижня. З’ясувати, чи були дні, коли кількість відвідувачів була меншою за 10.
{
    let arr = [];

    for (let i = 0; i < 7; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    function weigher(x, i, arr) {
        return x < 10;
    }

    console.log(arr.some(weigher));
}

// Задача 7. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».
{
    function counterCharacterA() {
        let count = 0;

        for (let i = 0; i < arguments.length; i++) {

            if (arguments[i] == "a" || arguments[i] == "A") {
                count++;
            }
        }

        return count;
    }

    console.log(counterCharacterA("a", "b", "c", "d", "a", "c", "k", "l", "k", "i", "m", "d", "a", "b", "f"));
}

// Задача 8. Розробити функцію, яка би для довільної кількості чисел знаходила добуток чисел.
{
    function productNumbers() {
        let multiplier = 1;

        for (let i = 0; i < arguments.length; i++) {

            multiplier *= arguments[i];
        }

        return multiplier;
    }

    console.log(productNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
}

// Задача 9. Розробити функцію, яка би для довільної кількості чисел знаходила максимальне.
{
    function maxNumber() {
        let max = arguments[0];

        for (let i = 1; i < arguments.length; i++) {

            if (max < arguments[i]) {
                max = arguments[i];
            }
        }

        return max;
    }

    console.log(maxNumber(1, 8, -5, 3, 0, 10, 15, -55));
}

// ДЗ_2
// 1.	Задача. Відсортувати масив імен за останньою літерою.
{
    let nameArray = ["Vasia", "Larysa", "Max", "Misha", "Ivan", "Valera", "Anton", "Katia", "Maksym", "Sergiy"];

    console.log(nameArray);

    function sortLastCharacter(item1, item2) {

        if (item1.split("")[item1.length - 1] > item2.split("")[item2.length - 1]) {
            return 1;
        }
        if (item1.split("")[item1.length - 1] < item2.split("")[item2.length - 1]) {
            return -1;
        }
        return 0;
    }

    console.log(nameArray.sort(sortLastCharacter));
}

// 2.	Задача. Дано масив цін. Для усіх товарів, які дорожчі за 1000грн дати знижку 20% (помножити на 0.8), а для усіх інших товарів – надати 5 % знижки (помножити на 0.95).
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 2000 + 1);
    }

    console.log(arr);

    function sale(x, i, arr) {
        if (x < 1000) {
            return arr[i] = Math.floor(x * 0.95);
        }
        if (x > 1000) {
            return arr[i] = Math.floor(x * 0.8);
        }
    }

    let saleArray = arr.map(sale);
    console.log(saleArray);
}

// 3.	Задача. Дано масив років народження працівників. Вивести масив тих, які є призовного віку (менше 25 років).
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    console.log(arr);

    function soldier(x, i, arr) {
        if (x > 18 && x < 25) {
            return x;
        }
    }

    let draftee = arr.filter(soldier);
    console.log(draftee);
}

// 4.	Задача. Дано масив показників гемоглобіну (масив чисел). Сформувати масив тих, які є меншими за 115.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 500 + 1);
    }

    console.log(arr);

    function hemoglobin(x, i, arr) {
        return (x < 115);
    }

    let hemoglobinLess115 = arr.filter(hemoglobin);
    console.log(hemoglobinLess115);
}

// 5.	Задача. Дано масив цін товарів. Сформувати масив тих, які є меншими за 2000грн.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 100 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 4000 + 1);
    }

    console.log(arr);

    function product(x, i, arr) {
        return (x < 2000);
    }

    let productLess2000 = arr.filter(product);
    console.log(productLess2000);
}

// 6.	Задача. Дано масив цін товарів. Знайти сумарну вартість тих, які знаходяться в межах від 1000 до 2000.
{
    let arr = [];
    let quantity = Math.floor(Math.random() * 10 + 1);

    for (let i = 0; i < quantity; i++) {
        arr[i] = Math.floor(Math.random() * 4000 + 1);
    }

    console.log(arr);

    function productSum(sum, x, i, arr) {
        if (x > 1000 && x < 2000) {
            sum += x;
        }
        return sum;
    }

    console.log(arr.reduce(productSum, 0));
}

// 7.	Задача. Дано масив номерів автомобілів. Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».
{
    
}