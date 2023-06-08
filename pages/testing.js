import _ from "lodash"
const test = "test"

function median(arr) {
  let sortedArr = arr.sort((a, b) => a - b) // Make a copy of the array and sort it in ascending order
  let mid = Math.floor(sortedArr.length / 2)
  return sortedArr.length % 2 === 0
    ? // If the array has an even number of elements, return the average of the middle two
      (sortedArr[mid - 1] + sortedArr[mid]) / 2
    : // Otherwise, return the middle element
      sortedArr[mid]
}
console.log(median([5, 6, 50, 1, -5]))
console.log(median([1, 2, 3, 4, 5]))

function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}
export default Testing
