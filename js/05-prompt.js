// За допомогою prompt запропонуйте користувачу ввести значення.
// Створіть функцію checkValue(value), всередині якої буде Promise
// Якщо введене користувачем значення не є числом, потрібно відхилити проміс і логувати 'error'
// Якщо введене користувачем значення є число і воно парне, розв'язуй проміс і повертай 'even'
// через 1 секунду.
// Якщо введене користувачем значення є число і воно не парне, розв'язуй проміс і повертай 'odd'
// через 2 секунди.

const value = prompt("Set number")
console.log(value)

function checkValue(value) {
    return new Promise((resolve, reject) => {
        if (isNaN(value)) {
            reject("Error");
        } else {
            value % 2 === 0 ? setTimeout(() => resolve("Even"), 1000) : setTimeout(() => resolve("Odd"), 2000)
    }
})
}

checkValue(value)
    .then(val => console.log(val))
    .catch(error=>console.log(error))