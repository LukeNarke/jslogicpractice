import _ from "lodash"
const test = "test"

const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === "function" ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length
console.log(averageBy([{ a: 40 }, { a: 20 }, { a: 80 }, { a: 60 }], (o) => o.a))
console.log(averageBy([{ a: 4 }, { a: 2 }, { a: 8 }, { a: 6 }], "a"))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
