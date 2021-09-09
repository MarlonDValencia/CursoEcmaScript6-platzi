let name = "Marlon";
let age = 20;
//ES5
obj = { name: name, age: age };
//ES6
obj2 = { name, age };
console.log(obj2)

//ArrowFunctions
const names = [
    { name: "Marlon", age: 20 },
    { name: "Yessica", age: 27 },
    { name: "Oscar", age: 30 }
];

let listOfnames = names.map(function(item) {
    console.log(item.name);
})

let listOfnames2 = names.map(item => console.log(item.name));

const listOfnames3 = (name, age, country) => {
    //...
};

const listOfnames4 = name => {
    //...
};

const square = num => num * num;
console.log(square(2));

const helloPromise = () => {

    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!");
        } else {
            reject("Ups!");
        }
    });
}

helloPromise().then(response => console.log(response)).catch(error => console.log(error));