// INSTRUCCIONES
// Modificar la constante "fromFolder" para indicar que directorio quieres copiar
// Modificar la constatnte "toFolder" para idicar el nombre del directorio donde quieres poner la copia. Si no existe se creará un directorio nuevo
// Por defecto se excluyen los directorios "node_modules" y ".git"
// Automaticamente se crea una copia comprimida .ZIP del directorio duplicado

const fromFolder = "../node_works";
const toFolder = "../node_works_copy";

const copydir = require("copy-dir");
const zipper = require("zip-local");

copydir(
  fromFolder,
  toFolder,
  function(stat, filepath, filename) {
    // Filter to exclude files
    /*if(stat === 'file' && path.extname(filepath) === '.html') {
      return false;
    }*/

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

      // Starting the ZIP compression
      zipper.zip(toFolder, function(error, zipped) {
        if (!error) {
          zipped.compress();
          var buff = zipped.memory();
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
