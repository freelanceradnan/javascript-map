//some provide only boolean value like every

//does array have even Num?
// let nums=[1,2,3,4,5]
// let evenNum=nums.some(function(el){
//     if(el%2==0){
//         return el
//     }
// })
// console.log(evenNum)

//
//does array have odd Num?
// let nums=[1,2,3,4,5,6]
// let oddNums=nums.some(function(el){
//     if(el%2!=0){
//         return el
//     }
// })
// console.log(oddNums)

//question given and answer following object
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
// Is there at least one male character?
// let isMale=characters.some(function(el){
//     if(el.gender=='male')
//     {
//         return el
//     }
// })
// console.log(isMale)

// Is there at least one character with blue eyes?
// let isBlueEyes=characters.some(function(el){
//     if(el.eye_color=='blue'){
//         return el
//     }
// })
// console.log(isBlueEyes)

//Is there at least one character taller than 200?
let isHeight200=characters.some(function(el){
    if(el.height>=200){
        return el;
    }
})
console.log(isHeight200)