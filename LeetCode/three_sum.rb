# https://leetcode.com/problems/3sum/description/
# difficulty : medium
# @param {Integer[]} nums
# @return {Integer[][]}

def three_sum(nums)
    ret=[]
    nums=nums.sort!
    i=0
    total_length = nums.length
    while i<total_length - 2
      if (i == 0 || nums[i] > nums[i-1])
        j = i+1
        k = total_length -1
        while j<k
          target = 0 - nums[i] - nums[k]
          if nums[j] == target
            ret.push([nums[i],nums[j],nums[k]])
            j += 1
            k -= 1
            while j<k && nums[j] == nums[j-1]
              j += 1
            end
            while j<k && nums[k] == nums[k+1]
              k -= 1
            end
          elsif nums[j]<target
            j += 1
          else
            k -= 1
          end
        end
      end
      i += 1
    end
    ret
end

a=[-1,2,1,0,-1,-4]
puts three_sum(a)[0]