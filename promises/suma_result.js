function sumar(s1, s2) {
  return new Promise((resolve, reject) => {
    if (s1 == 0 || s2 == 0) {
      reject("Error operandos");
    } else {
      setTimeout(() => {
        console.log(`Suma de ${s1} + ${s2} es ${s1 + s2}`);
        resolve(s1 + s2);
      }, 2000);
    }
  });
}

function potencia(res) {
  let pot = Math.pow(res, 2);
  if (pot > 100) {
    throw "Resultado mayor que 100";
  } else {
    return Promise.resolve(pot);
  }
}

function calcular() {
  setTimeout(function() {
    s1 = Math.floor(Math.random() * 10);
    console.log(`Primer numero ${s1}`);
  }, 1000);

  setTimeout(function() {
    s2 = Math.floor(Math.random() * 10);
    console.log(`Segundo numero ${s2}`);

    sumar(s1, s2)
      .then(potencia)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, 2000);
}

calcular();
