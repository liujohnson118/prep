/**
 * https://leetcode.com/problems/zigzag-conversion/description/
 * Level: medium
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var matrix = [];
    for (i = 0; i < numRows; i++){
      matrix.push([]);
    }
    var ks = [];
    for (i = 0; i < numRows; i++){
      ks.push(i);
    }
    for (i = numRows - 2; i > 0; i--){
      ks.push(i);
    }
    console.log(ks);
    let ksLength = ks.length;
    var tempK = 0;
    for (i = 0; i < s.length; i++){
      //matrix[ks[tempK]].push(s[i]);
      console.log("tempK " + tempK);
      console.log("To push " + s[i]);
      console.log("PUsh to " + ks[tempK]);
      matrix[ks[tempK]].push(s[i]);
      tempK++;
      if(tempK === ksLength){
        tempK = 0;
      }
    }
    var returnString = "";
    for (i = 0; i < numRows; i++){
      returnString += matrix[i].join("");
    }
    return(returnString);
};

convert("paypalishiring", 3);