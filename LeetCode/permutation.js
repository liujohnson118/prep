/**
 * https://leetcode.com/problems/permutations/description/
 * Difficulty: medium
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length <= 1){
        return [nums];
    }
    var permutations = [];
    for(var i = 0; i < nums.length; i++){
        var tmpNum = nums[i];
        if(nums.indexOf(tmpNum ) !== i){
            continue;
        }
        var remainingNums = nums.slice(0,i).concat(nums.slice(i+1,nums.length));
        for(var tmpPermutation of permute(remainingNums)){
            console.log(tmpPermutation);
            permutations.push([tmpNum].concat(tmpPermutation));
        }
    }
    return permutations;

};