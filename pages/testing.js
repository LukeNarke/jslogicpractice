const luke = "Luke";
const dig = (obj, target) => {
  return target in obj
    ? obj[target]
    : Object.entries(obj).reduce((prev, curr) => {
        return typeof curr === "object" ? dig(curr, target) : undefined;
      }, {});
};

const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};
console.log(dig(data, "level3"));
console.log(dig(data, "level4"));
console.log(dig(dog, "message"));

function Testing() {
  return (
    <div>
      <h1>{luke}</h1>
    </div>
  );
}
export default Testing;
