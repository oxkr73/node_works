const fs = require("fs");
const path = require("path");

// 1
function readDir(dir) {
  return new Promise((resolve, reject) => {
    //invocar fs.readdir
    fs.readdir(dir, function(err, files) {
      if (err) {
        reject(err);
      } else {
        //=> devuelve array

        // => Promise.all(array => Promise {
        Promise.all(
          files.map(file => {
            const filepath = path.join(dir, file);
            fs.stat(filepath, function(err, stats) {
              if (err) {
                throw new Error("Error in stats");
              } else {
                //si es fichero inprimo fichero concatenado con la ruta
                console.log(filepath);
                if (stats.isFile()) {
                  new Promise((resolve, reject) => {
                    //console.log(filepath);
                    resolve(filepath);
                  });
                  // directorio invoco otra vez a read(dir)
                } else if (stats.isDirectory()) {
                  new Promise((resolve, reject) => {
                    //console.log(readDir(filepath));
                    resolve(readDir(filepath));
                  });
                }
              }
            });

            return filepath;
          })
        ).then(console.log);
      }
    });

    // resolve fichero concatenado
    //}
    //)
  });
}

//2 Imprimir por pantalla los directorios
readDir("../buffer_streams");
