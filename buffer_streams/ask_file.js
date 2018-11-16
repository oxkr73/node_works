// 1.- Preguntar si descarga fichero
const readline = require("readline");
const fs = require("fs");
const readJson = fs.createReadStream("./movieDetails.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let localFile = [];

rl.question("¿Quieres descargar el fichero? (s/n) ", answer => {
  rl.output.write(`Tu respuesta ha sido: ${answer}`);
  if (answer == "s") {
    readJson.on("data", chunk => {
      localFile.push(chunk);
    });
  } else {
    rl.output.write(`No lo descargo, has respondido: ${answer}`);
    writeFromConsole();
  }
  //rl.close();
});

readJson.on("end", () => {
  console.log("Archivo descargado!!");
  console.log(localFile);
});

// 2.- Leer de la consola un texto y guardarlo en un fichero
function writeFromConsole() {
  rl.question("Escribe directamente en la consola: ", answer => {
    if (answer.length > 0) {
      rl.output.write(answer);
    } else {
      rl.output.write(`Ok, pues cierro el proceso. No has escrito nada`);
    }

    rl.close();
  });
}
// 3.- Copiar de un fichero a otro (ejercicio de pipes)
