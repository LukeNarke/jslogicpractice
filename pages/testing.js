import _ from "lodash"
const test = "test"

const group_By = (arr, fn) => {
  let arr1 = arr.map(typeof fn === "function" ? fn : (val) => val[fn])
  let arr2 = arr1.reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    console.log("acc[val]", acc[val])
    console.log("arr[i]", arr[i])
    return acc
  }, {})
  return arr2
}

console.log(group_By([6.1, 4.2, 6.3], Math.sqrt))
console.log(group_By([6.1, 4.2, 6.3], Math.floor))
console.log(group_By(["one", "two", "three"], "length"))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
