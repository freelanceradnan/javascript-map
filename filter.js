//using filter in js

let nums=[1,2,3,4,5,6]
let evenNums=nums.filter(function(element){
    if(element%2==0){
        return element;
    }
})
console.log(evenNums)