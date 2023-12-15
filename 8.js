let myMap = new Map();

myMap.set('страна1', 'Италия');
myMap.set('страна2', 'Россия');
myMap.set('страна3', 'Германия');


for (let name of myMap.entries()) {
  console.log(`Ключ = ${name[0]}, значение = ${name[1]}`);
}
