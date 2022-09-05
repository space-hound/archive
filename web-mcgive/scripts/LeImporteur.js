
const fileNames = [
    "sword", "axe", "pickaxe", "shovel", "bow", "trident", "boots", "helmet", "chestplate", "leggings"
];

let arrayOfObjects = "[";
fileNames.forEach( (name, index, arr) => {
    arrayOfObjects += name;
    if(index < arr.length - 1) {
        arrayOfObjects += ", ";
    }
    let stringus = "import " + name + " from './" + name + "'";
    console.log(stringus);
});
arrayOfObjects += "]";

console.log(arrayOfObjects);