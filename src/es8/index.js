const data = {
    frontend: "Oscar",
    backend: "Isabel",
    design: "Ana",
}

const entries = Object.entries(data);
console.log(entries);

const values = Object.values(data);
console.log(values);

const string = "Hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(7, "hi"));