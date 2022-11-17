//We Will try conditions ie iteration staments
if(4>3){
    console.log("if checked")
}
else if(2>3){
    console.log("Some other error")
}
else{
    console.log("error")
}
//Loops
//It work same as c# in this matter have just oen more for of
for (let i = 0; i < 6; i++) {
    console.log(i)
  }
  let count = prompt('Enter a positive number: ')
while (count > 0) {
  console.log(count)
  count--
}
const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
  console.log(number)
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
for (const country of countries) {
  console.log(country.toUpperCase())
}
const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }
// ternary
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
  //Scope
  // We have local that is name given like other and same with global

  //Window is the one that remain in this window scope ie not folloed in the next window
  
