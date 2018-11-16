let values = [1, 2, 3];

function custom_map(arr, callback) {
  let newArr = [];
  arr.forEach(element => {
    newArr.push(callback(element));
  });
  return newArr;
}

function cb(arr) {
  return arr * 2;
}

console.log(custom_map(values, cb));
