function isSymmetrical(number) {
  const digits = number.toString().split("");
  const reversedDigits = digits.slice().reverse();
  return digits.join("") === reversedDigits.join("");
}

for (let i = 1; i <= 10000; i++) {
  if (isSymmetrical(i)) {
    console.log(i);
  }
}
