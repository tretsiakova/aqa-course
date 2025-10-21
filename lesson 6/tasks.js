//Hello world from JS --> JS from world Hello
const words = "Hello world from JS";
const reverseWords = words.split(' ').reverse().join(' ');

console.log(reverseWords);

//palindrom
const palindrom = "A man a plan a canal Panama"
const checkPalindrom = palindrom.toLowerCase().split(' ').reverse().map(str => str.split('').reverse().join('')).join('');
console.log(checkPalindrom);
console.log(palindrom.toLowerCase().split(' ').join('') === checkPalindrom);

