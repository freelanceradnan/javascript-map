//every return boolean value
//print a number with every double result
// let num=[1,2,3,4,5]

// let math=num.every(function(el){
//     return el*2;
// })
// console.log(math);

//print number with every even number(false)
let nums=[1,2,3,4,5,6]
let even=nums.every(function(el){
    if(el%2==0){
        return el
    }
})
console.log(even)