//short methods
//shorting array number(shorter to langer number)

// let num=[30,23,12,344,2,4]
// let result=num.sort(function(a,b){
//     return a-b;
// })
// console.log(result)

// //shorting array number(larger to shorter number)
// let arr=[200,2,23,21,234,211]
// let result=arr.sort(function(a,b){
//     return b-a;
// })
// console.log(result)

//sorting array string (charecter)

// let names=['basundahara','padma','adnan','shaharia','mahim']
// names.sort()
// console.log(names)

//solving problems following array

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


// Sort by mass
// Sort by height
// Sort by gender

// Sort by name
let sortName=characters.sort(function(a,b){
    return a.name.localeCompare(b.name)
})
console.log(sortName)