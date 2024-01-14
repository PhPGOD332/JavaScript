// Линейный поиск нужного числа в массиве
const array = [1, 4, 5, 8, 5, 1 ,2, 6, 8, 9, 2, 8, 5, 15, 12];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if(array[i] === item) {
            return i;
        }
    }

    return null;
}

console.log(linearSearch(array, 12));
console.log('count = ', count);