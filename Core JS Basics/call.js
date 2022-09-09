let user = {
  name: "shru",
  age: 20,
};
let user2 = {
  name: "aru",
  age: 2,
};
function getInfo(city, country) {
  console.log(
    "HI IM" + this.name + "AT" + this.age + "LIVING IN" + city + country
  );
}

getInfo.call(user2, "TVL", "INDIA");
