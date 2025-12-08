function func(value: unknown) {
    return value;
}

let num = func(10);
// unknown 타입

let str = func("string");
// unknown 타입

if (typeof num === "number") {
    num.toFixed();
}