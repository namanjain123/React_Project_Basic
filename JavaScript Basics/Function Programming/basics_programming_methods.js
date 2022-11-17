//for each
function callback(item, index, arr) {}
array.forEach(callback)

// or syntax in an arrow function
const callback = (item, i, arr) => {}
array.forEach(callback)

//map
const countries_map = ['Finland', 'Estonia', 'Sweden', 'Norway']
const countriesLength = countries_map.map((country) => country.length)

console.log(countriesLength) // [7, 7, 6, 6]

//filter
const countries_filter = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = countries_filter.filter(
  (country) => !country.includes('land')
)
console.log(countriesWithLand) 

//reduce
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum) // 55