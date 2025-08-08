//using filter in js

// let nums=[1,2,3,4,5,6]
// let evenNums=nums.filter(function(element){
//     if(element%2==0){
//         return element;
//     }
// })
// console.log(evenNums)

//print odd nums using filter methods
let nums=[1,2,3,4,5,6,7,8]
let oddNums=nums.filter(function(element){
    if(element%2!=0){
        return element
    }
})
console.log(oddNums)