// Сортировка выбором
const arr = [0, 3, 2, 5, 6, 2, 5, 7, 9, 23, 94, 29, 1, 4, 9, 92, -5] // [0, 1, 2, 3, ...]
let count = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count += 1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array;
}

console.log(arr.length);
console.log(selectionSort(arr));
console.log(count);