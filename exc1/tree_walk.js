var fs = require("fs");
var filetree = {};

var walkDirectory = function(path, obj) {
  var dir = fs.readdirSync(path);
  for (var i = 0; i < dir.length; i++) {
    var name = dir[i];
    var target = path + "/" + name;

    var stats = fs.statSync(target);
    if (stats.isFile()) {
      if (name.slice(-3) === ".js") {
        obj[name.slice(0, -3)] = require(target);
      }
    } else if (stats.isDirectory()) {
      obj[name] = {};
      walkDirectory(target, obj[name]);
    }
  }
};

walkDirectory("../events", filetree);
console.log(filetree);
