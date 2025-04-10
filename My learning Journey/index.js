var createHelloWorld = function(...outerArgs) {
    return function(...innerArgs) {
        return {
            outer: outerArgs,
            inner: innerArgs
        };
    }
};

const f = createHelloWorld("hi", "outerValue");
console.log(f("innerValue", 42));