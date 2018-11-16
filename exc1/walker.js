var fs = require("fs"),
  path = require("path");

function walk(dir, callback) {
  fs.readdir(dir, function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      var filepath = path.join(dir, file);
      fs.stat(filepath, function(err, stats) {
        if (stats.isDirectory()) {
          walk(filepath, callback);
        } else if (stats.isFile()) {
          callback(filepath, stats);
        }
      });
    });
  });
}

if (exports) {
  exports.walk = walk;
} else {
  walk(".", manageFile);
}

walk("../buffer_streams", filepath => {
  console.log(filepath);
});
