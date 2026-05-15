/**
 * Выводит элементы массива в формате:
 * Element 0: value x
 * @param {Array} array - массив для вывода
 */
function printArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Argument must be an array");
    }

    for (let i = 0; i < array.length; i++) {
        console.log(`Element ${i}: value ${array[i]}`);
    }
}

/**
 * Выводит элементы массива в формате:
 * 0: x
 * @param {Array} array - массив для вывода
 */
function printArray1(array) {
    if (!Array.isArray(array)) {
        throw new TypeError("Argument must be an array");
    }

    for (let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`);
    }
}

/**
 * Выполняет callback для каждого элемента массива.
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция обратного вызова
 */
function forEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Second argument must be a function");
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

/**
 * Создает новый массив из результатов callback.
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция преобразования
 * @returns {Array} новый массив
 */
function map(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Second argument must be a function");
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }

    return result;
}

/**
 * Фильтрует массив по условию callback.
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {Array} новый массив с подходящими элементами
 */
function filter(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Second argument must be a function");
    }

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }

    return result;
}

/**
 * Возвращает первый элемент, удовлетворяющий условию callback.
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {*} найденный элемент или undefined
 */
function find(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Second argument must be a function");
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }

    return undefined;
}

/**
 * Проверяет, есть ли хотя бы один элемент, удовлетворяющий условию callback.
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {boolean}
 */
function some(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Second argument must be a function");
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }

    return false;
}

/**
 * Проверяет, удовлетворяют ли все элементы условию callback.
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция проверки
 * @returns {boolean}
 */
function every(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Second argument must be a function");
    }

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }

    return true;
}

/**
 * Последовательно обрабатывает массив, накапливая результат.
 * @param {Array} array - исходный массив
 * @param {Function} callback - функция обработки
 * @param {*} initialValue - начальное значение аккумулятора
 * @returns {*} итоговое значение
 */
function reduce(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        throw new TypeError("First argument must be an array");
    }

    if (typeof callback !== "function") {
        throw new TypeError("Second argument must be a function");
    }

    if (array.length === 0 && initialValue === undefined) {
        return undefined;
    }

    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}


/* Примеры использования */

const numbers = [1, 2, 3, 4, 5];

console.log("printArray:");
printArray(numbers);

console.log("\nprintArray1:");
printArray1(numbers);

console.log("\nforEach:");
forEach(numbers, (element, index) => {
    console.log(`Index ${index}: ${element}`);
});

console.log("\nmap:");
const squares = map(numbers, (element) => element * element);
console.log(squares);

console.log("\nfilter:");
const evenNumbers = filter(numbers, (element) => element % 2 === 0);
console.log(evenNumbers);

console.log("\nfind:");
const firstEven = find(numbers, (element) => element % 2 === 0);
console.log(firstEven);

console.log("\nsome:");
const hasEven = some(numbers, (element) => element % 2 === 0);
console.log(hasEven);

console.log("\nevery:");
const allEven = every(numbers, (element) => element % 2 === 0);
console.log(allEven);

console.log("\nreduce:");
const sum = reduce(numbers, (accumulator, element) => {
    return accumulator + element;
}, 0);

console.log(sum);