import _ from "lodash"
const test = "test"
const nthElement = (arr, n = 0) => arr.slice(n)[0]
console.log(nthElement(["a", "b", "c"], 1))
console.log(nthElement(["a", "b", "b"], -3))
function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
