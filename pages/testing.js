import _ from "lodash";
const test = "test";
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join("").toUpperCase() : rest.join(""));
console.log(decapitalize("W3resource"));
console.log(decapitalize("Red", true));
function Testing() {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  );
}
export default Testing;
