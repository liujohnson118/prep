# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    i = 0
    ret = []
    while i < nums.length
        tmp = nums.index(target-nums[i])
        ##puts "i is #{i} and tmp is #{tmp}"
        if tmp !=nil && tmp != i
           ret.push(i)
           ret.push(tmp)
           ret.sort!
           return ret
            break
        end
        i = i+1
    end

end

a=[1,2,3,4,5]
b=[3,3]
puts two_sum(b,6)