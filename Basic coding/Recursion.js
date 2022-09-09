const p = parseInt(prompt("Enter"));
let natural = (n) => {
  if (n >= 0) {
    return n;
  } else {
    return n + natural(n - 1);
  }
};
console.log(natural(n));
