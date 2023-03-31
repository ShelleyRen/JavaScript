//Write a function that takes a number as input and returns true if the number is prime, false otherwise.
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(12)); // false
