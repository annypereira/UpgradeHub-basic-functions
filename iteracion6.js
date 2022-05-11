// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  let food = [];
  for (const value of param) {
    if (!food.includes(value)) {
      food.push(value);
    }
  }

  return food;
}

const newFood = removeDuplicates(duplicates)
console.log(newFood);
