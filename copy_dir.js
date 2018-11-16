const copydir = require("copy-dir");
const zipper = require("zip-local");

const fromFolder = "../node_works";
const toFolder = "../node_works_copy";

copydir(
  fromFolder,
  toFolder,
  function(stat, filepath, filename) {
    // Filter for exclude files
    /*if(stat === 'file' && path.extname(filepath) === '.html') {
      return false;
    }*/
    // Filter for exclude directories
    if (
      stat === "directory" &&
      (filename === "node_modules" || filename === ".git")
    ) {
      return false;
    }
    return true;
  },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Copy ok");

      // Starting the ZIP compression
      zipper.zip(toFolder, function(error, zipped) {
        if (!error) {
          zipped.compress(); // compress before exporting

          var buff = zipped.memory(); // get the zipped file as a Buffer

          // or save the zipped file to disk
          zipped.save(toFolder + ".zip", function(error) {
            if (!error) {
              console.log("Zipped and saved successfully !");
            }
          });
        }
      });
    }
  }
);
