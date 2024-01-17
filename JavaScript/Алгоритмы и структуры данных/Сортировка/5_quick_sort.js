// Быстрая сортировка/Сортировка Хуаре. Сложность - O(log2 n*n)
const arr = [0, 3, 2, 5, 6, 2, 5, 7, 9, 23, 94, 29, 1, 4, 9, 92, -5] // [0, 1, 2, 3, ...]
let count = 0;

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex)
            continue;
        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(arr.length);
console.log(quickSort(arr));
console.log(count)