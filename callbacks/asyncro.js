function add(a, b, callback) {
  let result = a + b;
  setTimeout(function() {
    callback(result);
  }, 0);
}

console.log("before");

add(1, 2, function(result) {
  console.log("Result: " + result);
});

console.log("after");
