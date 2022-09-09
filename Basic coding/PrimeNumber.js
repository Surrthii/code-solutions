const p = parseInt(prompt("Enter"));
for (let i = 2; i <= p; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${i} is a prime`);
  }
}
