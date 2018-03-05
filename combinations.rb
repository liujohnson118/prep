def fn(active, rest, a)
  if (active.length+rest.length)==0
    return
  end
  if rest.length==0
    a.push(active)
  else
    fn(active+rest[0],rest.slice(0,rest.length-1),a)
    fn(active, rest.slice(0,rest.length-1),a)
  end
  return a
end

def combinations(str)
  fn("",str,[])
end

puts combinations("abcd")