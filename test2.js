//Write a function that takes an array of objects and returns an array of the objects' names.
function getNames(arr) {
  let namesArr = [];
  for (let i = 0; i < arr.length; i++) {
    namesArr.push(arr[i].name);
  }
  return namesArr;
}

let arr = [{ name: "John" }, { name: "Jane" }, { name: "Jim" }];
console.log(getNames(arr)); // ['John', 'Jane', 'Jim']
