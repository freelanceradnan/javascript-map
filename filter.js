//using filter in js

// let nums=[1,2,3,4,5,6]
let evenNums=nums.filter(function(element){
    if(element%2==0){
        return element;
    }
})
console.log(evenNums)

//print odd nums using filter methods
let nums=[1,2,3,4,5,6,7,8]
let oddNums=nums.filter(function(element){
    if(element%2!=0){
        return element
    }
})
console.log(oddNums)

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// Get characters with mass greater than 100
let massThen100=characters.filter(function(element){
    return element.mass>100
})
console.log(massThen100)

//Get characters with height less than 200
let heightLessThan200=characters.filter(function(element){
    return element.height<200;
})
console.log(heightLessThan200)

// Get all male characters
let allMaleCharecters=characters.filter(function(element){
    if(element.gender=='male'){
        return element
    }
})
console.log(allMaleCharecters)

//Get all female characters
let allFemaleChar=characters.filter(function(element){
    if(element.gender=='female'){
        return element;
    }
})
console.log(allFemaleChar)