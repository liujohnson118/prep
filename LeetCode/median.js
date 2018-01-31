/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Median of two sorted arrays from LeetCode
 * Level: hard
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const l = nums1.length + nums2.length;
    var arr = nums1.concat(nums2);
    var found = [];
    console.log("concat is "+arr);
    if(l % 2 === 1 ){
       while(found.length !== (l+1)/2){
           var tempSmallest = arr[0];
           var foundSmaller = false;
           for(i = 0; i < arr.length; i++){
               if(arr[i] < tempSmallest){
                   tempSmallest = arr[i];
                   foundSmaller = true;
               }
           }
           found.push(tempSmallest);
           console.log(found);
           arr.splice(arr.indexOf(tempSmallest),1);
       }
       return(found[found.length-1])
    }else{
      while(found.length !== (l+2)/2){
           var tempSmallest = arr[0];
           var foundSmaller = false;
           for(i = 0; i < arr.length; i++){
               if(arr[i] < tempSmallest){
                   tempSmallest = arr[i];
                   foundSmaller = true;
               }
           }
           found.push(tempSmallest);
           console.log(found);
           arr.splice(arr.indexOf(tempSmallest),1);
       }
       return(0.5 * (found[found.length - 1] + found[found.length - 2]))
    }
};

var a = [7,3,9,8,7,7,7,7];
var b = [2,11,18,12];
console.log(findMedianSortedArrays(a,b));