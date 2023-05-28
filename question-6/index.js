function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // Output: 120

function factorial(n) {
  return [...Array(n).keys()].reduce((acc, cur) => acc * (cur + 1), 1);
}

console.log(factorial(5)); // Output: 120
