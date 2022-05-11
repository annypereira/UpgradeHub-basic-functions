//Calcular un promedio es una tarea extremadamente común

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

function calcularPromedio(param) {
  let promedio = 0;
  param.forEach(function (numero1) {
    promedio += numero1;
  });
  return promedio / param.length;
}

const prom = calcularPromedio(numbers2);

console.log(prom);
