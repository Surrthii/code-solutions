let user = {
  name: "shru",
  age: 20,
};
let user2 = {
  name: "aru",
  age: 2,
};
function getInfo(city, country) {
  console.log(this.name, this.age, city, country);
}

let ans = getInfo.bind(user2, "tvl", "india");
ans();
