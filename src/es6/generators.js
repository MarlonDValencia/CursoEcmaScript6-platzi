function* helloWorld() {
    if (true) {
        yield "Hello World!"
    }
    if (true) {
        yield "everybody!"
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);