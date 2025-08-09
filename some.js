//some provide only boolean value like every

//find even num
let nums=[1,2,3,4,5]
let evenNum=nums.some(function(el){
    if(el%2==0){
        return el
    }
})
console.log(evenNum)
