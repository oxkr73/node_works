let s1 = 1;
let s2 = 2;

/*setTimeout(function() {
  s1 = Math.floor(Math.random() * 10);
}, 1000);

setTimeout(function() {
  s2 = Math.floor(Math.random() * 10);
}, 2000);*/

const suma = (a, b) => {
  return new Promise(function(resolve, reject) {
    if (s1 == 0 || s2 == 0) {
      const err = new Error("Uno de los operandos es 0");
      reject(err);
    } else {
      resolve(s1 + s2);
    }
  });
};

const cuadrado = num => {
  return new Promise(function(resolve, reject) {});
};

const operaciones = new Promise((resolve, reject) => {
  if (!suma) {
    const err = new Error("Error en suma");
    reject(err);
  } else {
    resolve(suma(s1, s2));
  }
});

const runProm = function() {
  operaciones
    .then(console.log)
    .then(cuadrado(suma))
    .catch(error => console.log(error.message));
};
runProm();

//console.log(suma(1, 2));
//console.log(cuadrado(2));
