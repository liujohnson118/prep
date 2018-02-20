# https://leetcode.com/problems/permutations/description/
# difficulty: medium
# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
   if nums.length <= 1
    return [nums]
   end
   i = 0
   ret = []
   for i in 0..nums.length
    tmpNum = nums[i]
    if nums.index(tmpNum).to_i<i
      next
    end
    remainingNums = nums.slice(0,i).concat(nums.slice(i+1,nums.length))
    permute(remainingNums).each{|tmpPermutation|
      ret.push([tmpNum].concat(tmpPermutation))
    }
  end
  return ret
end

myArr = permute([1,2,3])
myArr.each{|group|
  puts group
}