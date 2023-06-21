import _ from "lodash"
const test = "test"

const when = (pred, whenTrue) => (x) => pred(x) ? whenTrue(x) : x
const doubleEvenNumbers = when((x) => x % 2 === 0, x * 2)
console.log(doubleEvenNumbers(2))
console.log(doubleEvenNumbers(1))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
