//Сортировка пузырьком
const arr = [0, 3, 2, 5, 6, 2, 5, 7, 9, 23, 94, 29, 1, 4, 9, 92, -5] // [0, 1, 2, 3, ...]
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }
    return array;
}

console.log(arr.length);
console.log(bubbleSort(arr)); // O(n*n)
console.log(count);