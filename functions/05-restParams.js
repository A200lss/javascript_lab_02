// Instead of using 'arguments', is better to use rest parameters
function superSum(...nums)
{
    var result = 0
    console.log(nums)
    for(i in nums){
        if(typeof(nums[i]) == 'number' && !isNaN(nums[i])){
            result += nums[i]
        }        
    }
    return result
}
console.log(superSum(true, 12, undefined, 15, NaN))