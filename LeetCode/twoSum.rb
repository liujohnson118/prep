# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    i=0
    j=nums.length-1
    nums = nums.sort!
    while ((nums[i]+nums[j])!=target)
        if (nums[i]+nums[j])>target
            j -= 1
        else
            i += 1
        end
    end
    return [i,j]
end

a=[3,2,4]
b=[3,3]
puts two_sum(a,6)
#puts a[0]+a[2]!=6