const reverseString = (str) => {
  let strReversed = "";
  let top = str.length - 1;

  for (top; top >= 0; top--) {
    strReversed += str[top];
  }
  return strReversed;
};

console.log(reverseString("fedcba"));
