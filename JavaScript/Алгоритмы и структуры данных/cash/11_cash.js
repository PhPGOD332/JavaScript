// Кеш. Кешируем функцию с вычислением факториала.
function cashFunction(fn) {
    const cash = {}
    return function (n) {
        if (cash[n]) {
            console.log('Взято из кеша', cash[n])
            return cash[n]
        }
        let result = fn(n)
        console.log('Посчитала функция', result)
        cash[n] = result
        return result
    }
}

function factorial(n) {
    let fact = 1;
    while (n != 1) {
        fact *= n;
        n -= 1;
    }
    return fact
}

const cashFactorial = cashFunction(factorial)

console.log(cashFactorial(2))
console.log(cashFactorial(3))
console.log(cashFactorial(10))
console.log(cashFactorial(15))
console.log(cashFactorial(10))