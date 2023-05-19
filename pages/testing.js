import _ from "lodash"
const test = "test"
const over =
  (...fns) =>
  (...args) =>
    fns.map((fn) => fn.apply(null, args))
const minMax = over(Math.min, Math.max)
console.log(minMax(1, 2, 3, 4, 5))
console.log(minMax(1, 2, 5, 4, 3))
console.log(minMax(1, 2, 5, -4, 3))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
