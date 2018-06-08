/*

Repeat a String Repeat a String

Repeat a given string str (first argument) for
num times (second argument). Return an empty
string if num is not a positive number.

*/

function repeatStringNumTimes(str, num) {
  let resultStr = '';

  for (let i = 0; i < num; i++) {
    resultStr += str;
  }

  return resultStr;
}

console.log(repeatStringNumTimes('abc', 3));
console.log(repeatStringNumTimes('abc', -3));
console.log(repeatStringNumTimes('abc', 0));
