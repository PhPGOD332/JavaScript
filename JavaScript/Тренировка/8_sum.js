/*
    Реализовать функцию, которая будет суммировать числа и выводить в логи.

    Пример
    sum(5)(4)(11)

    result log
        5
        9
        20
*/

function sum(n) {
    console.log(n)
    return function(a) {
        return sum(a + n)
    }
}

console.log(sum(5))
console.log(sum(2)(5))