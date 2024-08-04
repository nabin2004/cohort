// Create a variable of type string and try to add a number to it.

let a = "Nabin";
console.log(a +" has a data type of "+ typeof(a))
a = 10;
console.log(a + " has a datatype of "+ typeof(a))

const name = "Nabin";
console.log(name)

// name = "Nabraj"
// console.log(name)

// LEARNINGS: we cannot change the variable declared using the const keyword
// we can change the variable declared using the let keyword


const person = {
    name: "Nabin",
    age: 21
};

console.log(person.name, "has a age of ", person.age)


const dictionary = {
    "apple": "a fruit that is typically red, green, or yellow",
    "computer": "an electronic device for storing and processing data",
    "book": "a set of written or printed pages, usually bound with a protective cover",
    "car": "a road vehicle, typically with four wheels, powered by an internal combustion engine",
    "ocean": "a large body of salt water that covers most of the Earth's surface"
};


for (let word in dictionary) {
    console.log(`${word}: ${dictionary[word]}`);
}