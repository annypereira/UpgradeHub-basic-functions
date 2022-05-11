// Crea una función que reciba por parámetro un array y el valor que desea
// comprobar que existe dentro de dicho array - comprueba si existe el 
// elemento en caso que existan nos devuelve un true y la posición de dicho
// elemento y por la contra un false.

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xavier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function checkName (data, dataSearch) {
  for (const name of data) {
    if (name === dataSearch){
      return (`${dataSearch} + ${data.indexOf(dataSearch)}`);
    }
  }
  return "name is false";
}

const existen = checkName(nameFinder, "Xavier");
console.log(existen);

// // for..in --> Claves/key/indexs... Objects/Arrays
// const objetito = { Anny: "Emma" }; // --> clave: Anny / valor: Emma
// // for..of --> valores/value/content...  Arrays/Arrays of objects
// const arraysito = ["Emma"]; // --> clave 0 / valor: Emma


