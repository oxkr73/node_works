const copydir = require("copy-dir");
const zipper = require("zip-local");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const copyDir = function(fromFolder, toFolder, options, filters) {
  const fromFold = fromFolder;
  const toFold = toFolder;

  console.log(typeof options.zipDoc);

  const opt = options || {};

  opt.zipDoc = !options ? false : options.zipDoc;
  opt.removeCopy = !options ? false : options.removeCopy;

  copydir(
    fromFold,
    toFold,
    function(stat, filepath, filename) {
      // Filter to exclude files
      //if(stat === 'file' && path.extname(filepath) === '.html') {
      //  return false;
      //}

      // Filter to exclude directories
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
        console.log(process.eventNames());
        if (opt.zipDoc) {
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

        if (opt.removeCopy) {
          rl.question(
            `¿Seguro que quieres eliminar el archivo copia ${toFold}? (s/n) `,
            answer => {
              if (answer == "s" || answer == "S") {
                fs.rmdir(toFold, function(err) {
                  if (err) {
                    return console.error(err);
                  }
                  console.log("File deleted successfully!");
                });
              }

              rl.close();
            }
          );
        }
      }
    }
  );
};

module.exports = copyDir;
