//For Each
function callback(item, index, arr) {}
array.forEach(callback)
const callback = (item, i, arr) => {}
array.forEach(callback)

//Map
const countries_map = ['Finland', 'Estonia', 'Sweden', 'Norway']
const countriesLength = countries_map.map((country) => country.length)

console.log(countriesLength) // [7, 7, 6, 6]

//Filter
const countries_filter = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = countries_filter.filter(
  (country) => !country.includes('land')
)
console.log(countriesWithLand) 

//Reduce
const numbers_reduce = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers_reduce.reduce((acc, cur) => acc + cur)
console.log(sum) // 55

//Find
const number_find = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = number_find.find((n) => n % 2 === 0)
const firstOddNum = number_find.find((n) => n % 2 !== 0)
console.log(firstEvenNum) // 0
console.log(firstOddNum) // 1

//Find Index
const numbers_findindex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenIndex = numbers_findindex.findIndex((n) => n % 2 === 0)
const firstOddIndex = numbers_findindex.findIndex((n) => n % 2 !== 0)
console.log(firstEvenIndex) // 0
console.log(firstOddIndex) // 1

//Some
const evens = [0, 2, 4, 6, 8, 10]
const someAreEvens = evens.some((n) => n % 2 === 0)
const someAreOdds = evens.some((n) => n % 2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // false

// Every
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const allAreEvens = numbers.every((n) => n % 2 === 0)
const allAreOdd= numbers.every((n) => n % 2 !== 0)

console.log(allAreEven) // false
console.log(allAreOdd)  // false

const even = [0, 2, 4, 6, 8, 10]
const someAreEven = evens.some((n) => n % 2 === 0)
const someAreOdd = evens.some((n) => n % 2 !== 0)

console.log(someAreEvens) // true
console.log(someAreOdds)  // false




