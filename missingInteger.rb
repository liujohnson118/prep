# you can write to stdout for debugging purposes, e.g.
# puts "this is a debug message"

def solution(a)
  # write your code in Ruby 2.2
  a.sort!
  min =1
  a.each{|x|
    if (x==min)
      min = min+1
    end
  }
  return min
end

a=[1, 3, 6, 4, 1, 2]
puts solution(a)