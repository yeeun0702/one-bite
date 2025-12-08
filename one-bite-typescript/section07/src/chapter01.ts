// 첫 번째 사례
function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);

// 두 번째 사례
function returnFirstValue(data: any){
    return data[0];
}

// 세 번째 사례
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
    return data[0];
}
// 튜풀인데 첫 번째는 T 이고 나머지 요소의 타입은 모름.

let str = returnFirstValue2([1, "hello", "mynameis"]);

// 네 번째 사례
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

getLength("123");            // ✅

getLength([1, 2, 3]);        // ✅

getLength({ length: 1 });    // ✅

getLength(undefined);        // ❌

getLength(null);             // ❌