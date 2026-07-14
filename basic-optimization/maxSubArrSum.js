const maxSubArrSum=(a)=>{
let sum=0
let max=-Infinity
for(const nums of a){
  sum+=nums
  max=Math.max(max,sum)
  if(sum<0){
    sum=0
}
}
return max
}
const arr=[ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
console.log(maxSubArrSum(arr))
//hi
