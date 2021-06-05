//1) Определение типов данных

let data;
function typeOf(data) {
    return typeof (data);
}
let x1;
let x2 = null;
let x3 = 0;
let x4 = false;
let x5 = "example";
let x6 = {
    a: 5,
    b: 6,
}
let x7 = function () { };
console.log(typeOf(x1));
console.log(typeOf(x2));
console.log(typeOf(x3));
console.log(typeOf(x4));
console.log(typeOf(x5));
console.log(typeOf(x6));
console.log(typeOf(x7));

//2) Сортировка массивов
let array = [11, 5, 19, 0, 7, 88, 1, 3, 6, 8, 6, 0];
//2.1) Сортировка по возрастанию с сохранением повторяющихся элементов
function sortAsc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    return arr;
}
console.log(sortAsc(array));
//2.2) Сортировка по убыванию с сохранением повторяющихся элементов
function sortDesc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                const num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    return arr;
}
console.log(sortDesc(array));
//2.3) Сортировка по возрастанию + удаление повторяющихся элементов
function sortAscWithoutReplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    for (let n = 0; n < arr.length; n++) {
        if (arr[n] === arr[n - 1]) {
            arr.splice(n, 1);
            n--;
        }
    }
    return arr;
}
console.log(sortAscWithoutReplicate(array));
//2.4) Сортировка по возрастанию + удаление повторяющихся элементов
function sortDescWithoutReplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                const num = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = num;
            }
        }
    }
    for (let n = 0; n < arr.length; n++) {
        if (arr[n] === arr[n - 1]) {
            arr.splice(n, 1);
            n--;
        }
    }
    return arr;
}
console.log(sortDescWithoutReplicate(array));
//2.5) Поиск наименьшего элемента
function minEl(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return 'Минимальное значение в массиве: ' + min;
}
console.log(minEl(array));
//2.6) Поиск наибольшего элемента
function maxEl(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return 'Максимальное значение в массиве: ' + max;
}
console.log(maxEl(array));
//3) Массив обьектов в обьект
let arr2 = [{ name: 'overflow', value: 'hidden' }, { name: 'cursor', value: 'pointer' }];
function objectArr(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i].name] = arr[i].value;
    }
    return obj;
}
console.log(objectArr(arr2));
