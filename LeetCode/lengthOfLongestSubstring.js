var lengthOfLongestSubstring = function(s) {
    var max = 0;
    for(var i = 0;i < s.length;i++){
        var tmpLongest = String(s[i]);
        for(var j = i+1;j<s.length;j++){
            if(tmpLongest.indexOf(s[j])<0){
                tmpLongest+=s[j];
            }else{
                break;
            }
        }
        if(tmpLongest.length>max){
            max = tmpLongest.length;
        }
    }
    return max;
};

var a="abceabcdeab";
console.log(lengthOfLongestSubstring(a));