//reduce in js
//sum of array element
let arr=[1,2,3,4,5]
let result=arr.reduce(function(acc,el){
    return acc+=el;
},0)
console.log(result)