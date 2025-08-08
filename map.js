//map in javascript
//double number print

// let nums=[1,2,3,4,5];
// let doubleNums=nums.map(function(el){
//     return el*2;
// })
// console.log(doubleNums)

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

//Get an array of all names
let allNams=characters.map(function(el){
    return el.name;
})
console.log(allNams)