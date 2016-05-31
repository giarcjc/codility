# Codility challenge - Binary Gap
# https://codility.com/demo/take-sample-test/binary_gap/


function solution(N) {
    // write your code in JavaScript (Node.js 4.0.0)
    var len = 0;
    var binary = N.toString([2]);
    var starr = binary.split(1)
    var i = 0;
    for (i; i < starr.length; i++){
      if(starr[i].length > len && i !== starr.length-1) {
        len = starr[i].length 
      }
    }
    return len;
}

