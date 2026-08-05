const user = {
  name: "arati jadhav",
  age: 30,
  address: {
    street: "123 Main St",
    city: "satara",
    country: "india",
  },
};

console.log("age dot notation", user.age);
console.log("age bracket notation", user["age"]);

//Basic object destructuring
const { name, age, address } = user;
console.log("name", name); // Output: arati jadhav
console.log("age", age); // Output: 30
console.log("address", address); // Output: { street: '123 Main St', city: 'satara', country: 'india' }

//Nested object destructuring
const {
  address: { street, city, country },
} = user;
console.log("street", street); // Output: 123 Main St
console.log("city", city); // Output: satara
console.log("country", country); // Output: india

//Rename (property:newName)
const { name: userName } = user;
console.log("userName", userName); // Output: arati jadhav
console.log("name", name); // Output: arati jadhav

//Default values (use only when the property is undefined)
const { role = "guest", verified = false } = user;
console.log("role", role); // Output: guest
console.log("verified", verified); // Output: false

//Function parameter destructuring
function displayUserInfo({ name, age, address: { street, city, country } }) {
  return `Name: ${name}, Age: ${age}, Address: ${street}, ${city}, ${country}`;
}
console.log(displayUserInfo(user));
