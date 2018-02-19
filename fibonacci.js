function fibonacci(n){
  var i = 0;
  if(n <= 2 ){
    return 1;
  }
  var var1 = 1;
  var var2 = 1;
  while(i < n - 2){
    sum = var1 + var2;
    var1 = var2;
    var2 = sum;
    i++;
  }
  return sum;
}

console.log(fibonacci(199));