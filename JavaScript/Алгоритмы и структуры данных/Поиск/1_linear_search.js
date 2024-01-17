//Линейный поиск элемента в массиве
const array = [1, 5, 8, 3, 4, 8, 15, 63, 52, 21, 23, 1, 6];
let count = 0;
function linearSearch(array, item) {
    for (let i = 0; i <= array.length; i++) {
        count += 1;
        if (array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 1));
console.log("count = ", count);