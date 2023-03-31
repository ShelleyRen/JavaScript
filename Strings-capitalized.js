function capitalizeArray(arr) {
  let capitalizedArr = [];
  for (let i = 0; i < arr.length; i++) {
    capitalizedArr.push(arr[i].toUpperCase());
  }
  return capitalizedArr;
}

console.log(capitalizeArray(["hello", "world"])); // ['HELLO', 'WORLD']
