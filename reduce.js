//reduce in js
//sum of array element
// let arr=[1,2,3,4,5]
// let result=arr.reduce(function(acc,el){
//     return acc+=el;
// },0)
// console.log(result)

//solving problems with reduce

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


// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color (hint. a map of eye color to count)

// Get the total mass of all characters
let totalMass=characters.reduce(function(acc,el){
    return acc+=Number(el.mass)
},0)
console.log(totalMass)
