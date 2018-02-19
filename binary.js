function binarySearchArray(arr, target){
  var min = 0;
  var max = arr.length - 1;

  while(max >= min){
    var guess = Math.floor((max + min) / 2);
    if(arr[guess] === target){
      return guess;
    }
    if(arr[guess] < target){
      min = guess +1;
    }
    if(arr[guess] > target){
      max = guess - 1;
    }
  }
  return - 1;
}

function twoSum(arr, target){
  var i = 0;
  var j = arr.length - 1;

  while(i < j){
    if(arr[i] + arr[j] === target){
      return true;
    }else if(arr[i] + arr[j] < target){
      i++;
    }else{
      j--;
    }
  }
  return false;
}


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

//var result = binarySearchArray(primes, 73);
console.log(twoSum(primes,200));