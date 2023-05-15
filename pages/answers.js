import { useState } from "react";
const luke = "Luke";

//
// Celsius and Fahrenheit converter
const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log("fahrenheit temp is: ", fahrenheit);
};
const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log("celsius temp is: ", celsius);
};
celsiusToFahrenheit(60);
fahrenheitToCelsius(45);

//
// Find website URL
console.log(document.URL);

//
// Get the extension of a filename
const filename = "system.php";
console.log(filename.split(".").pop());

//
// Get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference
function thirteenDifference(number) {
  if (number <= 13) {
    return 13 - number;
  } else {
    return (number - 13) * 2;
  }
}
console.log(thirteenDifference(32));
console.log(thirteenDifference(11));

//
// Compute the sum of the two given integers. If the two values are same, then returns triple their sum
function sumOrTriple(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log(sumOrTriple(10, 20));
console.log(sumOrTriple(10, 10));

//
// compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19
function numAnd19(num) {
  if (num > 19) {
    return (num - 19) * 3;
  } else {
    return 19 - num;
  }
}
console.log(numAnd19(12));
console.log(numAnd19(19));
console.log(numAnd19(22));

//
// Check two given numbers and return true if one of the number is 50 or if their sum is 50
function test50(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}
console.log("1", test50(50, 50));
console.log("2", test50(20, 50));
console.log("3", test50(20, 20));
console.log("4", test50(20, 30));

//
// Check whether a given integer is within 20 of 100 or 400
function withinRange(num) {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}
console.log(withinRange(10));
console.log(withinRange(90));
console.log(withinRange(99));
console.log(withinRange(199));
console.log(withinRange(200));

//
// Check from two given integers, whether one is positive and another one is negative
function positive_negative(num1, num2) {
  if ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(positive_negative(2, 2));
console.log(positive_negative(-2, 2));
console.log(positive_negative(2, -2));
console.log(positive_negative(-2, -2));

//
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string
function pyString(string) {
  if (
    string === null ||
    string === undefined ||
    string.substring(0, 2) === "Py"
  ) {
    return string;
  }
  return "Py" + string;
}
console.log(pyString("Python"));
console.log(pyString("thon"));

//
// Remove a character at the specified position of a given string and return the new string
function remove_character(string, character_position) {
  let part1 = string.substring(0, character_position);
  console.log(part1);
  let part2 = string.substring(character_position + 1, string.length);
  console.log(part2);
  return part1 + part2;
}
console.log(remove_character("hello", 3));

//
// Create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
function first_last(string) {
  if (string.length < 1) {
    return;
  }
  let mid_chars = string.substring(1, string.length - 1);
  console.log(mid_chars);
  return string.charAt(string.length - 1) + mid_chars + string.charAt(0);
}
console.log(first_last("hello"));

//
// Create a new string from a given string with the first character of the given string added at the front and back.
function front_back(str) {
  let first = str.substring(0, 1);
  return first + str + first;
}
console.log(front_back("a"));
console.log(front_back("ab"));
console.log(front_back("abc"));

//
// Check whether a given positive number is a multiple of 3 or a multiple of 7.
function test37(num) {
  if (num % 3 == 0 || num % 7 == 0) {
    return true;
  }
  return false;
}
console.log(test37(12));

//
// Create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more
function front_back3(str) {
  if (str.length >= 3) {
    let back = str.substring(str.length - 3);
    return back + str + back;
  } else return false;
}

//
// Check whether a string starts with 'Java' and false otherwise
function start_spec_str(str) {
  if (str.substring(0, 4) == "Java") {
    return true;
  } else return false;
}

//
// Check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range
function check_numbers(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    return true;
  } else return false;
}

//
// Check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
function check_three_nums(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    return true;
  } else return false;
}

//
// Check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
function check_script(str) {
  if (str.length < 6) {
    return str;
  }
  let result_str = str;

  if (str.substring(10, 4) == "Script") {
    result_str = str.substring(0, 4) + str.substring(10, str.length);
  }
  console.log("10 to 4", str.substring(10, 4));
  return result_str;
}

//
// Find the largest of three given integers
function max_of_three(x, y, z) {
  const largest = Math.max(x, y, z);
  return largest;
}

//
// Find a value which is nearest to 100 from two different given integer values
function near_100(x, y) {
  if (x != y) {
    let x1 = Math.abs(x);
    let y1 = Math.abs(y);
    if (x1 < y1) {
      return x;
    }
    if (y1 < x1) {
      return y;
    }
    return 0;
  } else return false;
}

//
// Check whether two numbers are in range 40..60 or in the range 70..100 inclusive
function numbers_ranges(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 60 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

//
// Find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive
function max_townums_range(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if (x === y) {
      return "Numbers are the same";
    } else if (x > y) {
      return x;
    } else {
      return y;
    }
  } else {
    return "Numbers don't fit in range";
  }
}

//
// Check a given string contains 2 to 4 numbers of a specified character
function check_char(str1, char) {
  let truthy = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == char && i >= 1 && i <= 3) {
      truthy = 1;
      break;
    }
  }
  if (truthy == 1) {
    return true;
  } else {
    return false;
  }
}

//
// Check whether the last digit of the three given positive integers is same
function last_digit(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 === y % 10 && x % 10 === z % 10 && y % 10 === z % 10;
  } else {
    return false;
  }
}

//
// Create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case
function upper_lower(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  }
  let front_3 = str.substring(0, 3);
  let back_3 = str.substring(3, str.length);
  return front_3.toLowerCase() + back_3.toUpperCase();
}

//
// Check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade where total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise
function exam_status(totalmarks, is_exam) {
  if (is_exam) {
    return totalmarks >= 90;
  }
  return totalmarks >= 89 && totalmarks <= 100;
}

console.log(exam_status("78", " "));
console.log(exam_status("89", "true "));
console.log(exam_status("99", "true "));

//
// Compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80
function sortaSum(x, y) {
  let sum = x + y;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else return 80;
}

//
// Check from two given integers whether one of them is 8 or their sum or difference is 8
function check8(x, y) {
  if (x === 8 || y === 8) {
    return true;
  }
  let sum = x + y;
  let absSum = Math.abs(x - y);
  if (sum === 8 || absSum === 8) {
    return true;
  }
  return false;
}

//
// Check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40
function three_numbers(x, y, z) {
  if (x === y && x === z) {
    return 30;
  } else if (x === y || x === z || y === z) {
    return 40;
  }
  return 20;
}

//
// Check whether three given numbers are increasing in strict mode or in soft mode
function number_order(x, y, z) {
  if (y > x && z > y) {
    return "strict mode";
  } else if (z > y) return "Soft mode";
  else return "Undefinded";
}
//
// Check from three given numbers (non negative integers) that two or all of them have the same rightmost digit
function same_last_digit(p, q, r) {
  return p % 10 === q % 10 || p % 10 === r % 10 || q % 10 === r % 10;
}

//
// Check from three given integers that whether a number is greater than or equal to 20 and less than one of the others
function lessby20_others(x, y, z) {
  return (
    (x >= 20 && (x < y || x < z)) ||
    (y >= 20 && (y < x || y < z)) ||
    (z >= 20 && (z < x || z < y))
  );
}

//
// Check two given integer values and return true if one of the number is 15 or if their sum or difference is 15
function test_number(x, y) {
  if (x === 15 || y === 15 || x + y === 15 || x - y === 15 || y - x === 15) {
    return true;
  }
  return false;
}

//
// Check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11
function valCheck(x, y) {
  if ((x % 7 === 0 || x % 11 === 0) && (y % 7 === 0 || y % 11 === 0)) {
    return false;
  } else if (x % 7 === 0 || x % 11 === 0 || y % 7 === 0 || y % 11 === 0) {
    return true;
  }
  return false;
}

//
// Check whether a given number is presents in the range 40..10000
function test_digit(x, y, n) {
  if (n <= y && n >= x) {
    return true;
  }
  return false;
}

//
// Reverse a given string
function string_reverse(str) {
  return str.split("").reverse().join("");
}

//
// Replace every character in a given string with the character following it in the alphabet
function encrypt(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.toUpperCase(text[i])) {
      // can replace the + 1 with a paramter to make it work for any number of characters forward or backward
      let ch = String.fromCharCode(((char.charCodeAt(0) + 1 - 65) % 26) + 65);
      result += ch;
    } else {
      let ch = String.fromCharCode(((char.charCodeAt(0) + 1 - 97) % 26) + 97);
      result += ch;
    }
  }
  return result;
}

//
// Capitalize the first letter of each word of a given string
function capital_letter(string) {
  let word = string.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}

//
// Convert a given number to hours and minutes
function time_convert(num) {
  let hours = Math.floor(num / 60);
  let minutes = num % 60;
  return `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
}

//
// Convert the letters of a given string in alphabetical order
function alphabet_Soup(str) {
  return str.split("").sort().join("");
}

//
// Check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string
function ab_Check(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}

//
// Check whether a given string contains equal number of p's and t's
function equal_pt(str) {
  var str_p = str.replace(/[^p]/g, "");

  var str_t = str.replace(/[^t]/g, "");

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
}

//
// Divide two positive numbers and return the result as string with properly formatted commas
function division_string(n1, n2) {
  n1 = 80;
  n2 = 6;

  var div = Math.round(n1 / n2).toString(),
    result_array = div.split("");

  if (div >= 1000) {
    for (var i = div.length - 3; i > 0; i -= 3) {
      result_array.splice(i, 0, ",");
    }
    result_array;
  }
}
console.log(result_array);

//
// Create a new string of specified copies (positive number) of a given string
function string_copies(str, n) {
  // if n = 0, then there shouldn't be any copies
  if (n <= 0) {
    return false;
  }
  return str.repeat(n);
}

//
// Create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
function string4(str) {
  if (str.length >= 3) {
    let ending = str.substring(str.length - 3, str.length);
    return ending.repeat(4);
  } else {
    return false;
  }
}

//
// Extract the first half of a string of even length
function first_half(str) {
  if (str.length % 2 == 0) {
    str = str.substring(0, str.length / 2);
    return str;
  }
  return str;
}

//
// Create a new string without the first and last character of a given string.
function without_first_end(str) {
  return str.substring(1, str.length - 1);
}

//
// Concatenate two strings except their first character
function concat_without_first(str1, str2) {
  str1 = str1.substring(1, str1.length);
  str2 = str2.substring(1, str2.length);
  return str1 + str2;
}

//
// Move last three character to the start of a given string. The string length must be greater or equal to three
function right_three(str) {
  if (str.length < 3) {
    return false;
  } else {
    let beginning = str.substring(0, str.length - 3);
    let ending = str.substring(str.length - 3, str.length);
    return ending + beginning;
  }
}

//
// Create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
function middle_three(str) {
  if (str.length < 3 || str % 2 === 0) {
    return false;
  }
  let middle = Math.floor(str.length / 2) - 1;
  let end = middle + 3;
  return str.substring(middle, end);
}

//
// Concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
function str_con_cat(str1, str2) {
  const smallerNum = Math.min(str1.length, str2.length);
  return (
    str1.substring(str1.length - smallerNum) +
    str2.substring(str2.length - smallerNum)
  );
}

//
// Test whether a string end with "Script". The string length must be greater or equal to 6
function end_script(str) {
  if (str.substring(str.length - 6, str.length) === "Script") {
    return true;
  } else {
    return false;
  }
}

//
// Display the city name if the string begins with "Los" or "New" otherwise return blank
function city_name(str) {
  if (
    (str.length >= 3 && str.substring(0, 3) === "Los") ||
    str.substring(0, 3) === "New"
  ) {
    return str;
  } else {
    return false;
  }
}

//
// Create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied
function nop(str) {
  if (str.substring(str.length - 1) === "P" || str.substring(0, 1) === "P") {
    return str.substring(1, str.length - 1);
  } else {
    return str;
  }
}

//
// Create a new string taking the first and last n characters from a given string. The string length must be greater or equal to n
function two_string(str, n) {
  if (str.length < n) {
    return `Not able to complete program with: ${str}`;
  }
  let first_part = str.substring(0, n);
  let second_part = str.substring(str.length - n, str.length);
  return `${first_part}${second_part}`;
}

//
// Compute the sum of three elements of a given array of integers of length 3
function sum_three(nums) {
  return nums[0] + nums[1] + nums[2];
}

//
// Rotate the elements left of a given array of integers of length 3
function rotate_elements_left(array) {
  return [array[1], array[2], array[0]];
}

//
// Check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1
function first_last_1(nums) {
  if (nums.length > 1) {
    return nums[0] === 1 || nums[nums.length - 1] === 1;
  }
}

//
// Check whether the first and last elements are equal of a given array of integers length 3
function first_last_same(nums) {
  let first = nums[0];
  let last = nums[nums.length - 1];
  if (first === last) {
    return true;
  } else {
    return false;
  }
}

//
// Reverse the elements of a given array of integers length 3
function reverse3(array) {
  return array.reverse();
}

//
// Find the larger value between the first or last and set all the other elements with that value. Display the new array
function all_max(nums) {
  let firstNum = nums[0];
  let lastNum = nums[nums.length - 1];
  if (firstNum > lastNum) {
    nums.fill(firstNum);
  } else if (lastNum > firstNum) {
    nums.fill(lastNum);
  }
  return nums;
}

//
// Create a new array taking the middle elements of the two arrays of integer and each length 3.
function middle_elements(a, b) {
  let newArr = [];
  newArr.push(a[1], b[1]);
  return newArr;
}

//
// Create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1
function started(nums) {
  let arr = [];
  if (nums.length > 0) {
    arr.push(nums[0], nums[nums.length - 1]);
    return arr;
  } else return console.log("Fails the test.");
}

//
// Test whether an array of integers of length 2 contains 1 or a 3
function contains13(nums) {
  if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1) {
    return true;
  } else return false;
}

//
// Test whether an array of integers of length 2 does not contain 1 or a 3
function is13(nums) {
  if (nums.indexOf(1) === -1 && nums.indexOf(3) === -1) {
    return true;
  } else return false;
}

//
// Test whether a given array of integers contains 30 or 40 twice. The array length should be 0, 1, or 2
function twice3040(arr1) {
  if (arr1.length === 0) {
    return false;
  }
  let a = arr1[0];
  let b = arr1[1];
  if ((a === 30 && b === 30) || (a === 40 && b === 40)) {
    return true;
  } else return false;
}

//
// Swap the first and last elements of a given array of integers. The array length should be at least 1
function swap(arr) {
  if (arr.length >= 1) {
    let first = arr[0];
    let last = arr[arr.length - 1];
    arr.shift();
    arr.unshift(last);
    arr.pop();
    arr.push(first);
    return arr;
  } else return false;
}

//
// Add two digits of a given positive integer of length two
function add_two_digits(n) {
  if (n.toString().length !== 2) {
    return false;
  }
  return (n % 10) + Math.floor(n / 10);
}

//
// Add two positive integers without carry
function add_two_int_without_carrying(n1, n2) {
  let result = 0;
  let x = 1;
  while (n1 > 0 && n2 > 0) {
    result += x * ((n1 + n2) % 10);
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    x *= 10;
  }
  return result;
}

//
// Find the longest string from a given array of strings
function longest_string(arr) {
  let str = arr.reduce((longest, current) =>
    longest.length > current.length ? longest : current
  );
  return [str];
}

//
// Replace each character of a given string by the next one in the English alphabet
function alphabet_char_Shift(str) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    let char = data.charCodeAt(i);
    if (char === 122) {
      arr.push(String.fromCharCode(97));
    } else {
      arr.push(String.fromCharCode(char + 1));
    }
  }
  return arr.join("");
}

//
// Divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two
function alternate_Sums(arr) {
  let arr1 = [];
  let arr2 = [];
  arr.forEach((num, i) => {
    if (i % 2 === 0) {
      arr1.push(num);
    } else {
      arr2.push(num);
    }
  });
  let sum1 = arr1.reduce((total, currentNum) => total + currentNum);
  let sum2 = arr2.reduce((total, currentNum) => total + currentNum);
  return [sum1, sum2];
}

//
// Find the types of a given angle
function angle_Type(angle) {
  if (angle >= 0 && angle < 90) {
    return "Acute Angle";
  } else if (angle === 90) {
    return "Right Angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse Angle";
  } else if (angle === 180) {
    return "Straight Angle";
  } else return false;
}

//
// Check whether two arrays of integers of same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements
function array_checking(arr1, arr2) {
  let res;
  if (arr1.length === arr2.length) {
    arr1.forEach((element, i) => {
      element === arr2[i] ? (res = true) : (res = false);
    });
    return res;
  }
  return console.log("Array length not equal");
}

//
// Write a JavaScript program that takes two integers and a divisor. If the given divisor divides both integers and it does not divide either, then two given integers are similar. Check whether two given integers are similar or not.
function checking_numbers(x, y, divisor) {
  if (
    (x % divisor === 0 && y % divisor === 0) ||
    (x % divisor !== 0 && y % divisor !== 0)
  ) {
    return true;
  }
  return false;
}

//
// Check whether it is possible to replace $ in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.
function check_arithmetic_Expression(x, y, z) {
  if (x + y === z || x - y === z || x * y === z || x / y === z) {
    return true;
  }
  return false;
}

//
// Find the kth greatest element of a given array of integers
function Kth_greatest_in_array(arr, k) {
  let arr2 = arr.sort((a, b) => {
    return b - a;
  });
  console.log("arr2", arr2);
  return `The ${k} greatest is ${arr2[k - 1]}`;
}

//
// Find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers. Narko
function array_max_consecutive_sum(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr
      // this slice will assign multiple values to the [i] position in the newArr
      .slice(i, i + num)
      // this reduce will add up all the values from the slice to give us one number
      .reduce((total, current) => total + current, 0);
  }
  return Math.max(...newArr);
}

//
// Find the maximum difference between any two adjacent elements of a given array of integers
function max_difference(arr) {
  let max = 0;
  let tempNum;
  for (let i = 0; i < arr.length - 1; i++) {
    tempNum = Math.abs(arr[i] - arr[i + 1]);
    max = Math.max(max, tempNum);
  }
  return max;
}

//
// Find the maximum difference among all possible pairs of a given array of integers
function array_max_diff(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return Math.abs(max - min);
}

//
// Find the number which appears most in a given array of integers
function array_element_mode(arr) {
  let newObj = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] || 0;
    acc[curr]++;
    return acc;
  }, {});
  let finalArr = Object.entries(newObj).sort((a, b) => b[1] - a[1])[0];
  return `The number with the most entries is ${finalArr[0]} with ${finalArr[1]} occurrences.`;
}

//
// Replace all the numbers with a specified number of a given array of integers
function array_element_replace(arr, old_value, new_value) {
  arr.forEach((num) =>
    num === old_value ? arr.splice(arr.indexOf(old_value), 1, new_value) : num
  );
  return arr;
}

//
// Compute the sum of absolute differences of consecutive numbers of a given array of integers
function sum_adjacent_difference(arr) {
  let total = 0;
  arr.forEach((num, i) => {
    total += Math.abs(
      num - (arr[i + 1] === undefined ? arr[arr.length - 1] : arr[i + 1])
    );
  });
  return total;
}
//
// Find the shortest possible string which can create a string to make it a palindrome by adding characters to the end of it
function build_Palindrome(str) {
  let strArr = str.split("");
  strArr.forEach((letter, i) => {
    // To loop from the end to the beginning (backwards), we use strArr[strArr.length - i - 1])
    if (letter !== strArr[strArr.length - i - 1]) {
      // we splice to replace the second-part letter with the first-part letter
      strArr.splice(strArr.length - i, 0, letter);
    }
  });
  return strArr.join("");
}

//
// Switch case of the minimum possible number of letters to make a given string written in the upper case or in the lower case
function change_case(str) {
  return str.length > 3 ? str.toLowerCase() : str.toUpperCase();
}

console.log(change_case("Write"));
console.log(change_case("PHp"));

//
// Check whether there is at least one element which occurs in two given sorted arrays of integers
function check_common_element(arr1, arr2) {
  let boolean = false;
  arr1.forEach((num) => {
    arr2.includes(num) ? (boolean = true) : false;
  });
  return boolean;
}

//
// Check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions
function test_string(str) {
  const hasOnlyLetters = !!str.match(/^[a-z]*$/i);
  let repeatChars;
  let strArr = str.split("");
  {
    hasOnlyLetters &&
      strArr.forEach((letter, i) => {
        letter === strArr[i + 1] ? (repeatChars = true) : null;
      });
  }
  // if hasOnlyLetters is true and repeatChars is false, function is true
  return hasOnlyLetters === true && repeatChars !== true ? true : false;
}

//
// Find the number of inversions of a given array of integers.
function number_of_InversionsNaive(arr) {
  return arr.reduce((accumulator, item, index, list) => {
    let count = 0;
    for (let i = index + 1; i < list.length; i++) {
      if (item > list[i] && index < i) {
        count++;
      }
    }
    return accumulator + count;
  }, 0);
}

//
// Find the maximum number from a given positive integer by deleting exactly one digit of the given number
function digit_delete(num) {
  let str = String(num);
  let max = 0;
  for (let i = 0; i < str.length; i++) {
    max = Math.max(max, str.replace(str[i], ""));
  }
  return max;
}

//
// Find two elements of the array such that their absolute difference is not greater than a given integer but is as close to the said integer
function different_values(arr, n) {
  return arr.reduce(
    (accumulator, item, index, list) => {
      for (let i = index; i < arr.length; i++) {
        if (
          Math.abs(item - list[i]) < n &&
          Math.abs(item - list[i]) > Math.abs(accumulator[0] - accumulator[1])
        ) {
          accumulator[0] = item;
          accumulator[1] = list[i];
        }
      }
      return accumulator;
    },
    [0, 0]
  );
}

//
// Find the number of times to replace a given number with the sum of its digits until it convert to a single digit number
function digit_to_one(num) {
  const digitSum = function (num) {
    let digit_sum = 0;
    while (num) {
      digit_sum += num % 10;
      num = Math.floor(num / 10);
    }
    console.log("digit_sum", digit_sum);
    return digit_sum;
  };

  let result = 0;
  while (num >= 10) {
    result += 1;
    num = digitSum(num);
  }
  return result;
}

//
// Divide an integer by another integer as long as the result is an integer and return the result.
function divide_digit(num1, num2) {
  return num1 % num2 === 0 ? num1 / num2 : "The result is not an integer";
}

//
// Find the number of sorted pairs formed by its elements of a given array of integers such that one element in the pair is divisible by the other one
function arr_pairs(arr) {
  let count = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] % arr[i] === 0 ? count++ : null;
    }
  }
  return count;
}

//
// Create the dot products of two given 3D vectors (The dot product is the sum of the products of the corresponding entries of the two sequences of numbers)
function dot_product(vector1, vector2) {
  let result = 0;
  for (let i = 0; i < vector1.length; i++) {
    result += vector1[i] * vector2[i];
  }
  return result;
}

//
// Sort an array of all prime numbers between 1 and a given integer
// Come back later
function sort_prime(num) {
  let prime_num1 = [],
    prime_num2 = [];
  for (let i = 0; i <= num; i++) {
    prime_num2.push(true);
  }
  console.log(prime_num2);
  for (let i = 2; i <= num; i++) {
    if (prime_num2[i]) {
      prime_num1.push(i);
      for (let j = 1; i * j <= num; j++) {
        prime_num2[i * j] = false;
      }
    }
  }

  return prime_num1;
}

//
// Find the number of even values in sequence before the first occurrence of a given number
function count_even(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length && arr[i] != num; i++) {
    arr[i] % 2 === 0 ? count++ : null;
  }
  return count;
}
//
// Check a number from three given numbers where two numbers are equal. Find the third one
function find_third_number(x, y, z) {
  if (x !== y && y !== z && z !== x) {
    return "No numbers are equal";
  }
  if (x === y) return z;
  if (x === z) return y;
  return x;
}

//
// Find the number of trailing zeros in the decimal representation of the factorial of a given number
function trailing_zeros_factorial(n) {
  let result = 0;
  for (let i = 5; i <= n; i += 5) {
    let num = i;
    while (num % 5 === 0) {
      num /= 5;
      result++;
    }
  }
  return result;
}

//
// Calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers.
function int_sum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num;
    num = Math.floor(num / 2);
  }
  return sum;
}

//
// Check whether a given string represents a correct sentence or not. A string is considered a correct sentence if it starts with a capital letter and ends with a full stop (.)
function is_correct_Sentence(str) {
  return str.charAt(0) === str.charAt(0).toLowerCase()
    ? "False -- Not a capital first letter."
    : str.charAt(str.length - 1) !== "."
    ? "False -- No period at the end of the sentence."
    : "True -- Complete sentence.";
}

//
// 115 doesn't have a working solution b/c it doesn't check for numbers in the diagnol

//
// Find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.
function is_divisible_by3(str) {
  let result = [];
  for (let i = 0; i < 10; i++) {
    let newStr = str.replace("#", i);
    let sum = newStr.split("").reduce((a, b) => a + b);
    if (sum % 3 === 0) {
      result.push(sum);
    }
  }
  return result;
}

//
// Check whether a given number is in a given range
function is_inrange(x, y, z) {
  return y >= x && y <= z;
}

console.log(is_inrange(1, 2, 3));
console.log(is_inrange(1, 2, -3));
console.log(is_inrange(1.1, 1.2, 1.3));
//
// Check if a given integer has an increasing digit sequence
function is_increasing_digits_Sequence(num) {
  let arr = ("" + num).split("");
  return arr.every((val, index, currentArr) => {
    return index === 0 || val > currentArr[index - 1];
  });
}

console.log(is_increasing_digits_Sequence(123));
console.log(is_increasing_digits_Sequence(1223));
console.log(is_increasing_digits_Sequence(45677));

//
// Check if a point lies strictly inside the circle
function check_a_point(a, b, x, y, r) {
  var dist_points = (a - x) * (a - x) + (b - y) * (b - y);
  r *= r;
  if (dist_points < r) {
    return true;
  }
  return false;
}

console.log(check_a_point(0, 0, 2, 4, 6));
console.log(check_a_point(0, 0, 6, 8, 6));

//
// Check whether a given array of integers represents a strictly increasing or decreasing sequence
function is_monotonous(arrArg) {
  let boolean = null;
  arrArg.forEach((val, i) => {
    if (arrArg[i + 1] !== undefined) {
      return Math.abs(val - arrArg[i + 1]) !== 1
        ? (boolean = false)
        : (boolean = true);
    }
  });
  return boolean;
}
console.log(is_monotonous([1, 2, 3]));
console.log(is_monotonous([1, 2, 2]));
console.log(is_monotonous([-3, -2, -1]));

//
// Find whether the members of a given array of integers is a permutation of numbers from 1 to a given integer
function is_permutation(arr, n) {
  let boolean;
  arr.forEach((num, i) => {
    num <= n
      ? arr.indexOf(i + 1) < 0
        ? (boolean = false)
        : (boolean = true)
      : (boolean = false);
  });
  return boolean;
}

//
// Create the NOR value of two given booleans
function test_logical_Nor(a, b) {
  return !a && !b;
}
console.log(test_logical_Nor(true, false));
console.log(test_logical_Nor(false, false));
console.log(test_logical_Nor(true, true));

//
// Find the longest string in a given array
function longest_str_in_array(arr) {
  let longest = "";
  arr.forEach((str) => {
    str.length > longest.length ? (longest = str) : null;
  });
  return longest;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));
console.log(longest_str_in_array(["ab", "ab", "ab"]));

//
// Get the largest even number from an array of integers
function max_even(arr) {
  let newArr = arr.sort((a, b) => {
    return a - b;
  });
  let value = 0;
  newArr.forEach((num) => {
    num % 2 === 0 && num > value ? (value = num) : null;
  });
  return value;
}

console.log(max_even([20, 40, 200]));
console.log(max_even([20, 40, 200, 301]));

//
// Reverse the order of bits in a integer
function mirror_bits(n) {
  let t = n.toString(2).split("");
  let str_len = t.length;
  for (let i = 0; i < 8 - str_len; i++) {
    t.unshift("0");
  }
  return parseInt(t.reverse().join(""), 2);
}
// 14 -> 00001110 -> 01110000 -> 112
console.log(mirror_bits(14));
// 56 -> 00111000 -> 00011100 -> 28
console.log(mirror_bits(56));
// 234 -> 11101010 -> 01010111 -> 87
console.log(mirror_bits(234));

//
// Find the smallest round number not less than a given value
function nearest_round_number(num) {
  return num + (num - (num % 10));
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));

//
// Find the smallest prime number strictly greater than a given number
function next_Prime_num(num) {
  let newNum = num + 1;
  while (newNum % 2 === 0) {
    newNum++;
  }
  return newNum;
}

console.log(next_Prime_num(3));
console.log(next_Prime_num(17));

//
// Find the number of even digits in a given integer
function even_digits(num) {
  let numArr = Array.from(String(num), Number);
  let count = 0;
  numArr.forEach((digit) => (digit % 2 === 0 ? count++ : null));
  return count;
}

console.log(even_digits(123));
console.log(even_digits(1020));
console.log(even_digits(102));

//
//
function prefix_sums(arr) {
  let newArr = [];
  arr.forEach((num, i) => {
    i > 0 ? newArr.push(num + newArr[i - 1]) : newArr.push(num);
  });
  return newArr;
}

console.log(prefix_sums([1, 2, 3, 4, 5]));
console.log(prefix_sums([1, 2, -3, 4, 5]));

//
// Find all distinct prime factors of a given integer
function prime_factors(num) {
  let arr = [];
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      if (i == 2 || i % 2) {
        arr.push(i);
      }
      num /= i;
    }
  }

  return arr;
}
console.log(prime_factors(100));
console.log(prime_factors(101));
console.log(prime_factors(103));
console.log(prime_factors(104));
console.log(prime_factors(105));

//
// Check whether a given fraction is proper or not
function proper_improper_test(num) {
  return Math.abs(num[0] / num[1]) < 1
    ? "Proper Fraction"
    : "Not a proper fraction";
}
console.log(proper_improper_test([12, 300]));
console.log(proper_improper_test([2, 4]));
console.log(proper_improper_test([103, 3]));
console.log(proper_improper_test([104, 2]));
console.log(proper_improper_test([5, 40]));

//
// Change the characters (lower case) in a string where a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a
function change_char(str) {
  let new_str = "";
  for (var i = 0; i < str.length; i++) {
    new_str += String.fromCharCode(122 + 97 - str.charCodeAt(i));
  }
  return new_str;
}
console.log(change_char("abcxyz"));
console.log(change_char("python"));

//
// Remove all characters from a given string that appear more than once
function remove_duplicate_cchars(str) {
  let set = new Set(str);
  return [...set].join("");
}
console.log(remove_duplicate_cchars("abcdabc"));
console.log(remove_duplicate_cchars("python"));
console.log(remove_duplicate_cchars("abcabc"));
console.log(remove_duplicate_cchars("1365451"));

//
// Replace the first digit in a string (should have at least one digit) with the $ character
function replace_first_digit(str) {
  return str.replace(/\d/, "$");
}
console.log(replace_first_digit("abc1dabc"));
console.log(replace_first_digit("p3ython"));
console.log(replace_first_digit("ab1cabc1"));

//
// Test whether a given integer is greater than 15 and return the given number, otherwise return 15
function test_fifteen(num) {
  return num > 15 ? num : 15;
}
console.log(test_fifteen("123"));
console.log(test_fifteen("10"));
console.log(test_fifteen("5"));

//
// Reverse the bits of a given 16-bit unsigned short integer
function sixteen_bits_reverse(num) {
  let reversed = num.toString(2);
  reversed = "0".repeat(16 - reversed.length) + reversed;
  return parseInt(reversed.split("").reverse().join(""), 2);
}
console.log(sixteen_bits_reverse(12345));
console.log(sixteen_bits_reverse(10));
console.log(sixteen_bits_reverse(5));

//
// Find the position of the rightmost round number in an array of integers. If there are no round numbers, the function returns 0
function find_rightmost_round_number(arr) {
  let answer = [];
  arr.forEach((num, i) => {
    num % 10 === 0 ? answer.push(i) : null;
  });
  return answer.length === 0 ? 0 : answer[0];
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));

//
// Check whether all the digits in a given number are the same or not
function test_same_digit(num) {
  let firstNum = num.toString()[0];
  let numArr = num.toString().split("");
  let answer = true;
  numArr.forEach((digit) => {
    return digit == firstNum ? null : (answer = false);
  });
  return answer;
}

console.log(test_same_digit(1234));
console.log(test_same_digit(1111));
console.log(test_same_digit(22222222));

//
// Find the number of elements in both arrays
function test_same_elements_both_arrays(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr1[i] === arr2[j] ? count++ : null;
    }
  }
  return count;
}
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(test_same_elements_both_arrays([1, 2, 3, 4], [11, 22, 33, 44]));

//
// Sort the strings of a given array of strings in order of increasing length
function sort_by_string_length(arr) {
  return arr.sort((a, b) => a.length - b.length);
}
const arr = ["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"];
console.log("Original array: " + arr + "\n");
console.log(
  sort_by_string_length(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"])
);

//
// Find the maximum integer n such that 1 + 2 + ... + n <= a given integer
function sumn(val) {
  let maxNum = 0;
  let i = 0;
  while (maxNum <= val) {
    console.log("maxNum-->", maxNum, "i-->", i);
    maxNum += i++;
  }
  return `The final answer is: ${i - 2}`;
}
console.log(sumn(11));
console.log(sumn(15));

//
// Compute the sum of cubes of all integers from 1 to a given integer
function sum_Of_Cubes(n) {
  let sumN = 0;
  for (let i = 0; i <= n; i++) {
    sumN += i ** 3;
  }
  return sumN;
}

console.log(sum_Of_Cubes(3));
console.log(sum_Of_Cubes(4));

//
// Change the capitalization of all letters in a given string
function change_case(txt) {
  let arr = txt.split("");
  arr.forEach((char, i) => {
    char === char.toUpperCase()
      ? (arr[i] = char.toLowerCase())
      : (arr[i] = char.toUpperCase());
  });
  return arr.join("");
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));

//
//
function swap_adjacent_digits(n) {
  let arr = n.toString().split("");
  console.log(arr.length);
  if (arr.length % 2 === 1) {
    return false;
  } else {
    for (let i = 0; i < n; i += 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    return parseInt(arr.join(""));
  }
}
console.log(swap_adjacent_digits(15));
console.log(swap_adjacent_digits(1234));
console.log(swap_adjacent_digits(123456));
console.log(swap_adjacent_digits(12345));

//
// https://www.w3resource.com/javascript-exercises/fundamental/index.php
// Compare two objects to determine if the first contains equivalent property values to the second one
const matches = (obj, source) => {
  return (
    JSON.stringify(Object.values(source)) === JSON.stringify(Object.values(obj))
  );
};
console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
); // false
console.log(
  matches(
    { age: 25, hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
); // true

//
// Copy a string to the clipboard
// const luke = "Luke";
const testing = "l;kajsoidjf;alskdjf;ioasjdl;kjasdf";
function Testing() {
  return (
    <div>
      <h1>{luke}</h1>
      <button
        onClick={() => {
          navigator.clipboard.writeText(testing);
        }}
      >
        <h2>{testing}</h2>
      </button>
      <h3></h3>
    </div>
  );
}
// export default Testing;

//
// Skipping the CSV stuff (like when tf am I goan need it!)
//
// Target a given value in a nested JSON object based on the given key
const dig = (obj, target) => {
  return target in obj
    ? // at this current level (starts at the top and goes down) does this target value exist right now?
      obj[target]
    : // this below function is how we get through multiple depths inside an object
      Object.values(obj).reduce((prev, val) => {
        if (typeof val === "object") return dig(val, target);
      }, {});
};

const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};
console.log(dig(data, "level3"));
console.log(dig(data, "level4"));
console.log(dig(dog, "message"));

//
// Convert the number to a string, then build an array
const digitize = (num) => {
  return Array.from(String(num), Number);
};
console.log(digitize(123));
console.log(digitize(1230));

//
// Filter out the specified values from a specified array. Return the original array without filtered values
const pull = (arr, ...args) => {
  // put a filter inside a forEach loop and make the arr not include any of values from the args
  args.forEach((val) => (arr = arr.filter((item) => item != val)));
  return arr;
};
let arra1 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra1, "a", "c"));
let arra2 = ["a", "b", "c", "a", "b", "c"];
console.log(pull(arra2, "b"));

//
// Combine the numbers of a given array into an array containing all combinations (skipped as of 5/3/23)
const powerset = (arr) => {
  let res = arr.reduce(
    (prev, val) => {
      return [
        ...prev,
        ...prev.map((p) => {
          return [...p, val];
        }),
      ];
    },
    [[]]
  );
  return res;
};
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));

//
// Extract values at specified indexes from a specified array
const pull_at_Index = (arr, pullArr) => {
  arr = arr.filter((val, i) => pullArr.includes(i));
  return arr;
};
let arr1 = ["a", "b", "c", "d", "e", "f"];
console.log(pull_at_Index(arr1, [1, 3]));
let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(pull_at_Index(arr2, [4]));

//
// Generate a random hexadecimal color code
const random_hex_color_code = () => {
  // storing all letter and digit combinations
  // for html color code
  let letters = "0123456789ABCDEF";
  // html color code starts with #
  let color = "#";
  // generating 6 times as HTML color code consist
  // of 6 letter or digits
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};

console.log(random_hex_color_code());

//
// Remove non ASCII characters from a string
const remove_non_ASCII = (str) => str.replace(/[^\x20-\x7E]/g, "");
console.log(remove_non_ASCII("äÄçÇéÉêw3resouröceÖÐþúÚ"));

//
// Convert a given string's length to bytes
const byte_Size = (str) => new Blob([str]).size;
// or
const byte_Size2 = (str) => new TextEncoder().encode(str).length;
console.log(byte_Size("123456"));
console.log(byte_Size("Hello World"));
console.log(byte_Size("Ã¢"));

//
// Replace multiple object keys' names with the values provided
// Luke revisit
const rename_keys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  );
const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
let result = rename_keys({ name: "firstName", job: "Actor" }, obj);
console.log("New Object");
console.log(result);

//
// Return the minimum-maximum value of an array, after applying the provided function to set a comparing rule
const reduce_Which = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
console.log(reduce_Which([1, 3, 2]));
console.log(reduce_Which([10, 30, 20], (a, b) => b - a));
console.log(
  reduce_Which(
    [
      { name: "Kevin", age: 16 },
      { name: "John", age: 20 },
      { name: "Ani", age: 19 },
    ],
    (a, b) => a.age - b.age
  )
);

//
// Returns true if the provided predicate function returns true for all elements in a collection, false otherwise
const all = (arr, fn = Boolean) => arr.every(fn);
console.log(all([4, 2, 3], (x) => x > 1));
console.log(all([4, 2, 3], (x) => x < 1));
console.log(all([1, 2, 3]));

//
// Split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group
const bifurcate = (arr, filter) => {
  let arr1 = [];
  let arr2 = [];
  arr.reduce((acc, val, i) => {
    return filter[i] === true ? arr1.push(val) : arr2.push(val);
  }, arr[0]);
  return { arr1, arr2 };
};
console.log(bifurcate([1, 2, 3, 4], [true, true, false, true]));
console.log(bifurcate([1, 2, 3, 4], [true, true, true, true]));
console.log(bifurcate([1, 2, 3, 4], [false, false, false, false]));

//
// Remove specified elements from the left of a given array of elements
// I'm removing n = 1 in the params, cause no reason to have it
const remove_from_left = (arr, n) =>
  n > 0
    ? arr.slice(n)
    : console.log("No number provided in the second argument");
console.log(remove_from_left([1, 2, 3]));
console.log(remove_from_left([1, 2, 3], 1));
console.log(remove_from_left([1, 2, 3], 2));
console.log(remove_from_left([1, 2, 3], 4));

//
// Remove specified elements from the right of a given array of elements
// I'm removing n = 1 in the params, cause no reason to have it
const remove_from_right = (arr, n) =>
  n < 0
    ? arr.slice(n)
    : console.log("No number provided in the second argument");

console.log(remove_from_right([1, 2, 3]));
console.log(remove_from_right([1, 2, 3], -1));
console.log(remove_from_right([1, 2, 3], -2));
console.log(remove_from_right([1, 2, 3], -4));

//
// Extend a 3-digit color code to a 6-digit color code
const extend_Hex = (shortHex) => (

)

console.log(extend_Hex('#03f'));
console.log(extend_Hex('05a'));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function Testing() {
  return (
    <div>
      <h1>{luke}</h1>
    </div>
  );
}

export default Testing;
