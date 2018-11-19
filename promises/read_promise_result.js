const fs = require("fs");
const path = require("path");

function walk(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(err);
      } else {
        Promise.all(
          files.map(file => {
            return new Promise((resolve, reject) => {
              const filepath = path.join(dir, file);
              fs.stat(filepath, (err, stats) => {
                if (err) {
                  return reject(err);
                } else {
                  if (stats.isFile()) {
                    resolve(filepath);
                  } else if (stats.isDirectory()) {
                    walk(filepath).then(resolve);
                  }
                }
              });
            });
          })
        ).then(foldersContents => {
          resolve(
            foldersContents.reduce(
              (all, folderContents) => all.concat(folderContents),
              []
            )
          );
        });
      }
    });
  });
}

walk("../buffer_streams").then(console.log);
