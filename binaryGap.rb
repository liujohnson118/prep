def solution(n)
  # write your code in Ruby 2.2
  max = 0
  tmpLength = 0
  trailing = ((n%2)==0)
  while (n>0)
    remainder = n%2
    if remainder ==0
      tmpLength = tmpLength + 1
    else
      if (tmpLength>max && !trailing)
        max=tmpLength
      end
      if trailing
        trailing = false
      end
      tmpLength=0
    end
    n=(n/2).floor
  end
  return max
end

puts solution(6)