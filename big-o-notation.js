// Allows us to compare algorithms and functions

// It's important to have a precise vocabulary about how our code performs
// Useful for discussing trade-offs between different approaches
// Useful to understand what is ineffcient code

//An example

// Suppose we want to write a function that calculates the sum of all numbers
// from 1 up to and including some number n

//counting the operations code has to run

//since loop -> n operations depending on the loop amount
//s n additions, n assignments, n additions and n assignments and 2 assignment, n comparisions
//as high as 5n+2, but we care about that the operations grow roughly proportionally with n
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(6));
//Number of operaions is eventually bound by a multple of n
//O(n)

// 1 multiplication, 1 addition, 1 division -> 3 operations
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
//constant -> O(1)

// Big O is a way to formalize Counting
// It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

//
