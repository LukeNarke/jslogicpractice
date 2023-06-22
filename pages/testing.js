import _ from "lodash"
const test = "test"
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val) => fn(...val))

console.log(
  unzipWith(
    [
      [1, 10, 100],
      [2, 20, 200],
    ],
    (...args) => args.reduce((acc, v) => acc + v, 0)
  )
)
function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
