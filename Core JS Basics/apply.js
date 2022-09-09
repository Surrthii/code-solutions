let user = {
  name: "shru",
  age: 20,
};
let user2 = {
  name: "aru",
  age: 2,
};
function getInfo(hometown, country) {
  console.log(this.name, this.age, hometown, country);
}
getInfo.apply(user2, ["Tvl", "India"]);
