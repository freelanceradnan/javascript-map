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
let nums=[1,2,3,4,5,6]
let oddNums=nums.some(function(el){
    if(el%2!=0){
        return el
    }
})
console.log(oddNums)