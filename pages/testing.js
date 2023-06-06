import _ from "lodash"
const test = "test"

const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj)
    return acc
  }, {})

const people = {
  fred: { person: "fred", age: 40 },
  pebbles: { person: "pebbles", age: 1 },
}
console.log(mapValues(people, (p) => p.age))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
