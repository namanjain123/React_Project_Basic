//Trying the classes
class naman{
    constructor(firstname, lastname){
        console.log(this)
    }
}

//Default claue with constructor
class Person {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
