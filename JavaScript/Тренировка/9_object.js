// Функция принимает два объекта с разными ключами, некоторые из которых могут пересекаться.
// Необходимо вернуть первый объект с обновленными зачениями из второго объекта(только те, которые совпадают).
//
// Example:
//     obj1 = {
//         foo: 'foo',
//         bar: 'bar',
//     }
//     obj2 = {
//         bar: 'foo',
//         some: 'some'
//     }
//     result = {
//         foo : 'foo',
//         bar: 'foo'
//     }


// 1 способ
// function object(obj1, obj2) {
//     let keysOfObject1 = Object.keys(obj1)
//     let keysOfObject2 = Object.keys(obj2)
//
//     for (let i = 0; i < keysOfObject1.length; i++) {
//         let key1 = keysOfObject1[i]
//         for (let j = 0; j < keysOfObject2; j++) {
//             let key2 = keysOfObject2[j]
//             if (key1 === key2) {
//                 obj1[key1] = obj2[key2]
//             }
//         }
//     }
// }
//
// console.log(obj1)

// 2 способ