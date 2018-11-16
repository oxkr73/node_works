function add(a, b, callback) {
  let result = a + b;
  callback(result);
}

console.log("before");

add(1, 2, function(result) {
  console.log("Result: " + result);
});

console.log("after");
