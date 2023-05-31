import _ from "lodash"
const test = "test"

const firstDefined = (...args) =>
  args.find((value) => ![null, undefined, NaN].includes(value))
console.log(firstDefined(null, undefined, "", NaN, "abcd"))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
