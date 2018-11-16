process.stdin.setEncoding("utf8");
process.stdout.write("¿Cómo estás hoy? ");
process.stdin.once("data", function(res) {
  process.stdout.write("Has respondido: " + res);
  //process.stdout.write(res);
  process.stdin.pause();
});
