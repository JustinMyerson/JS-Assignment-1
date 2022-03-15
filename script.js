const myConstant = 10
let myVariable = "Hello world"
console.log(myVariable)

const myArray = ["a", "b", "c", "d", "e"]

myArray.forEach(element => {
  console.log(element)
});

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

const animal = {
  type: "cat",
  name: "Meep",
}

console.log(animal.type + " " + animal.name)