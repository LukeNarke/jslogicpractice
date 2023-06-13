import _ from "lodash"
const test = "test"

const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
console.log(pickBy({ a: 1, b: "2", c: 3 }, (x) => typeof x === "number"))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
