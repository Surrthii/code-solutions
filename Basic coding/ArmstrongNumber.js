const n = parseInt(prompt("Enter n"));
for (let i = 1; i <= 200; i++) {
  let temp1 = i;
  let temp2 = i;
  let count = 0;
  let sum = 0;
  while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
  }
  while (temp2 > 0) {
    let rem = temp % 10;
    sum = sum + rem ** count;
    temp2 = Math.floor(temp2 / 10);
  }
  if (sum === i) {
    console.log(i);
  }
}
