import _ from "lodash"
const test = "test"
const object_From_Pairs = (arr) =>
  arr.reduce((acc, val) => ((acc[val[0]] = val[1]), acc), {})
console.log(
  object_From_Pairs([
    ["a", 1],
    ["b", 2],
  ])
)
console.log(
  object_From_Pairs([
    [1, 10],
    [2, 20],
    [3, 30],
  ])
)

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
