export const problemSet = [
  {
    id: 101,
    difficulty: "easy",
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.",
    examples: [
      {
        id: 1,
        input: "nums = [3,2,4], target = 6",
        output: "1,2",
      },
      { id: 2, input: "nums = [2,7,11,15], target = 9", output: "0,1" },
      {
        id: 3,
        input: "nums = [3,3], target = 6",
        output: "0,1",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
  },
  {
    id: 102,
    difficulty: "medium",
    title: "Add Two Numbers",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    examples: [
      {
        id: 1,
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
      },
      { id: 2, input: "l1 = [0], l2 = [0]", output: "[0]" },
      {
        id: 3,
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100]",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros",
    ],
  },
  {
    id: 103,
    difficulty: "medium",
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        id: 1,
        input: "s = 'abcabcbb'",
        output: "3",
      },
      { id: 2, input: "s = 'bbbbb'", output: "1" },
      {
        id: 3,
        input: "s = 'pwwkew'",
        output: "3",
      },
    ],
    constraints: [
      "0 <= s.length <= 5 * 104",
      "s consists of English letters, digits, symbols and spaces.",
    ],
  },
  {
    id: 104,
    difficulty: "hard",
    title: "Median of Two Sorted Arrays",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\nThe overall run time complexity should be O(log (m+n)).",
    examples: [
      {
        id: 1,
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
      },
      { id: 2, input: "nums1 = [1,2], nums2 = [3,4]", output: "2.50000" },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m <= 1000",
      "0 <= n <= 1000",
      "1 <= m + n <= 2000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6",
    ],
  },
  {
    id: 105,
    difficulty: "medium",
    title: "Longest Palindromic Substring",
    description:
      "Given a string s, return the longest palindromic substring in s.",
    examples: [
      {
        id: 1,
        input: "s = 'babad'",
        output: "bab",
      },
      { id: 2, input: "s = 'cbbd'", output: "bb" },
    ],
    constraints: [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters.",
    ],
  },
  {
    id: 106,
    difficulty: "medium",
    title: "Zigzag Conversion",
    description: `The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\n
    P       A       H       N
    A  P  L   S   I    I   G
    Y       I        R
    \nAnd then read line by line: "PAHNAPLSIIGYIR"\nWrite the code that will take a string and make this conversion given a number of rows:\nstring convert(string s, int numRows);`,
    examples: [
      {
        id: 1,
        input: "s = 'PAYPALISHIRING', numRows = 3",
        output: "PAHNAPLSIIGYIR",
      },
      {
        id: 2,
        input: "s = 'PAYPALISHIRING', numRows = 4",
        output: "PINALSIGYAHRPI",
      },
      {
        id: 3,
        input: "s = 'A', numRows = 1",
        output: "A",
      },
    ],
    constraints: [
      "1 <= s.length <= 1000",
      "s consists of English letters (lower-case and upper-case), ',' and '.'.",
      "1 <= numRows <= 1000",
    ],
  },
  {
    id: 107,
    difficulty: "medium",
    title: "Reverse Integer",
    description:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.\nAssume the environment does not allow you to store 64-bit integers (signed or unsigned).",
    examples: [
      {
        id: 1,
        input: "x = 123",
        output: "321",
      },
      {
        id: 2,
        input: "x = -123",
        output: "-321",
      },
      {
        id: 3,
        input: "x = 120",
        output: "21",
      },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
  },
  {
    id: 108,
    difficulty: "medium",
    title: " Reverse Integer",
    description:
      "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).\nThe algorithm for myAtoi(string s) is as follows:\n1. Read in and ignore any leading whitespace.\n2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.\n3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.\n4. Convert these digits into an integer (i.e. '123' -> 123, '0032' -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).\n 5. If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 2^31 - 1 should be clamped to 2^31 - 1.\n6. Return the integer as the final result.\nNote:\nOnly the space character ' ' is considered a whitespace character.\nDo not ignore any characters other than the leading whitespace or the rest of the string after the digits.",
    examples: [
      {
        id: 1,
        input: "s = '42'",
        output: "42",
      },
      {
        id: 2,
        input: "s = '   -42'",
        output: "-42",
      },
      {
        id: 3,
        input: "s = '4193 with words'",
        output: "4193",
      },
    ],
    constraints: [
      "0 <= s.length <= 200",
      "s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.",
    ],
  },
  {
    id: 109,
    difficulty: "easy",
    title: "Palindrome Number",
    description:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      {
        id: 1,
        input: "x = 121",
        output: "true",
      },
      {
        id: 2,
        input: "x = -121",
        output: "false",
      },
      {
        id: 3,
        input: "x = 10",
        output: "false",
      },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
  },
  {
    id: 110,
    difficulty: "hard",
    title: "Regular Expression Matching",
    description:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:\n1. '.' Matches any single character.​​​​\n2. '*' Matches zero or more of the preceding element.\n3. The matching should cover the entire input string (not partial).",
    examples: [
      {
        id: 1,
        input: "s = 'aa', p = 'a'",
        output: "false",
      },
      {
        id: 2,
        input: "s = 'aa', p = 'a*'",
        output: "true",
      },
      {
        id: 3,
        input: "s = 'ab', p = '.*'",
        output: "true",
      },
    ],
    constraints: [
      "1 <= s.length <= 20",
      "1 <= p.length <= 20",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
      "It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.",
    ],
  },
];
