//every return boolean value
//print a number with every double result
// let num=[1,2,3,4,5]

// let math=num.every(function(el){
//     return el*2;
// })
// console.log(math);

//print number with every even number(false)
// let nums=[1,2,3,4,5,6]
// let even=nums.every(function(el){
//     if(el%2==0){
//         return el
//     }
// })
// console.log(even)

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

//Does every character have blue eyes?
// let blueEyes=characters.every(function(el){
//     if(el.eye_color=='blue'){
//         return el
//     }
// })
// console.log(blueEyes)

// //Does every character have mass more than 40?
// let mass40=characters.every(function(el){
//     if(el.mass>=40){
//         return el
//     }
// })
// console.log(mass40)

// Is every character male?
let isMale=characters.every(function(el){
    if(el.gender=='male'){
        return el
    }
})
console.log(isMale)