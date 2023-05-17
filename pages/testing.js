import _ from "lodash";
const test = "test";
const sumBy = (arr, fn) => {};

console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], "n"));

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
}
export default Testing;
