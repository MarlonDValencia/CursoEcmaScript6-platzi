const obj = {
    name: "Marlon",
    age: 20,
    country: "CO",
};

const obj1 = {
    ...obj,
    carrer: "Engineer"
}

let { name, ...all } = obj;
console.log(name, all);
console.log(obj1);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve("Hello World"), 3000): reject(new Error("Test Error"))
    });
};

helloWorld().then(response => console.log(response)).catch(error => console.log(error)).finally(() => console.log("Finalizó"))